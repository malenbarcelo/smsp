const db = require('../../database/models')
const sequelize = require('sequelize')
const wellsQueries = require('./dbQueries/wellsQueries')
const calibrationQueries = require('./dbQueries/calibrationQueries')
const processesData = require('./data/processesData')
const indexData = require('./data/indexData')
const {entryData, bodyToPost} = require('./functions/exercisesAnswers')
const {apiUrlExercises} = require('./data/schemasimData')
const fetch = require('node-fetch')

//get DB Data
async function getData(idRoute,idWell){
  
  //well data
  const well = await wellsQueries.wellName(idWell)
  const hfs = await calibrationQueries.wellHf(idWell)
  const swits = await calibrationQueries.wellSwit(idWell)
  const pwds = await calibrationQueries.wellPwd(idWell)
  const thermalCalibration = await calibrationQueries.wellThermalCalibration(idWell)

  //processes data
  const processName='calibration'
  const processData = processesData.filter(process => process.name == processName)[0]
  const idContinueRoute = parseInt(idRoute) + 1
  const idBackRoute = parseInt(idRoute) - 1
  const continueRoute = '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idContinueRoute)[0].route
  const backRoute = idBackRoute == 0 ? 'NA' : '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idBackRoute)[0].route

  const data = {well,hfs,swits,pwds,processData,continueRoute,backRoute,indexData,idRoute,thermalCalibration}

  return data
}

const calibrationController = {
  bCcalibration: async(req,res) =>{
    try{
      //specific info
      const idRoute = 1
      const ejsTable = 'boundaryConditionCalibration'
      const title = 'Calibración Cond. de frontera'

      //common info
      const idWell = req.params.idWell
      var validation = 'fail'
      const data = await getData(idRoute,idWell)

      //render tables ejs
      return res.render('tables',{
        title,
        data,
        validation,
        ejsTable
      })

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  bCcalibrationValidation: async(req,res) =>{
    try{
      
      //specific info
      const idRoute = 1
      const ejsTable = 'boundaryConditionCalibration'
      const title = 'Calibración Cond. de frontera'

      //common info
      const idWell = req.params.idWell
      var validation = 'fail'
      const data = await getData(idRoute,idWell)
      const idUser = req.session.userLogged.id_user

      ///get correct data from database
      
      //hfs
      var hfsDataToCompare = {}

      data.hfs.forEach(row => {
        Object.keys(row).forEach(key => {
          const keyName = 'hf_' + key + '_' + row.id
          hfsDataToCompare[keyName] = row[key]
        })
      })

      //swits
      var switsDataToCompare = {}

      data.swits.forEach(row => {
        Object.keys(row).forEach(key => {
          const keyName = 'swit_' + key + '_' + row.id
          switsDataToCompare[keyName] = row[key]
        })
      })

      //pwds
      var pwdsDataToCompare = {}

      data.pwds.forEach(row => {
        Object.keys(row).forEach(key => {
          const keyName = 'pwd_' + key + '_' + row.id
          pwdsDataToCompare[keyName] = row[key]
        })
      })

      const dataToCompare = { ...hfsDataToCompare, ...switsDataToCompare, ...pwdsDataToCompare }

      //compare correct data to req.body
      const errors = []

      Object.keys(req.body).forEach(key => {
        if ((dataToCompare[key] != undefined && (parseFloat(req.body[key].replace(',','.')) != parseFloat(dataToCompare[key])))) {
          errors.push(key)
        }
      })

      if (errors.length == 0) {
        validation = 'passed'
      }

      //save exercises answers
      await entryData(data,idRoute,idUser,errors)

      //render tables ejs
      return res.render('tables',{
        title,
        data,
        validation,
        ejsTable,
        errors,
        oldData: req.body
      })

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  thermalCalibration: async(req,res) =>{
    try{
      //specific info
      const idRoute = 4
      const ejsTable = 'thermalCalibration'
      const title = 'Calibración termal'

      //common info
      const idWell = req.params.idWell
      var validation = 'fail'
      const data = await getData(idRoute,idWell)
      const idUser = req.session.userLogged.id_user

      //render tables ejs
      return res.render('tables',{
        title,
        data,
        validation,
        ejsTable
      })

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  thermalCalibrationValidation: async(req,res) =>{
    try{
      
      //specific info
      const idRoute = 4
      const ejsTable = 'thermalCalibration'
      const title = 'Calibración termal'
      const token = req.session.userLogged.tokenHashed

      //common info
      const idWell = req.params.idWell
      var validation = 'fail'
      const data = await getData(idRoute,idWell)
      const idUser = req.session.userLogged.id_user

      ///get correct data from database

      //hfs
      var dataToCompare = {}

      data.thermalCalibration.forEach(row => {
        Object.keys(row).forEach(key => {
          const keyName = key + '_' + row.id
          dataToCompare[keyName] = row[key]
        })
      })

      const errors = []

      Object.keys(req.body).forEach(key => {
        if ((dataToCompare[key] != undefined && (parseFloat(req.body[key].replace(',','.')) != parseFloat(dataToCompare[key])))) {
          errors.push(key)
        }
      })

      if (errors.length == 0) {
        validation = 'passed'
      }

      //save exercises answers
      await entryData(data,idRoute,idUser,errors)

      //post info to schemasim
      if (errors.length == 0) {

        const body = await bodyToPost(data,idUser,token)

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }        
        
        const response = await fetch(apiUrlExercises, options)
        
        const postResponse = await response.json()

        console.log(postResponse)
      }        

      //render tables ejs
      return res.render('tables',{
        title,
        data,
        validation,
        ejsTable,
        errors,
        oldData: req.body
      })

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  viewChart: async(req,res) =>{
    try{
      
      const idWell = req.params.idWell
      const chartRouteParam = req.params.chartRouteParam
      const well = await wellsQueries.wellName(idWell)
      const processData = processesData.filter(process => process.name == 'calibration')[0]
      const chartData = processData.charts.filter(chart => chart.routeParam == chartRouteParam)[0]
      const idRoute = processData.routes.filter(route => route.idChart == chartData.id)[0].id
      const idContinueRoute = parseInt(idRoute) + 1
      var idBackRoute = idRoute == 3 || idRoute == 6 ? parseInt(idRoute) - 2 : parseInt(idRoute) - 1
      const continueRoute = '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idContinueRoute)[0].route
      const backRoute = '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idBackRoute)[0].route
      
      const data = {well,processData,continueRoute,backRoute,indexData,idRoute,chartData}

      return res.render('charts',{title:chartData.title,data})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
}
module.exports = calibrationController

