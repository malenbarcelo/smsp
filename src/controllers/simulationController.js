const db = require('../../database/models')
const sequelize = require('sequelize')
const baseDataQueries = require('./dbQueries/baseDataQueries')
const wellDataRoQueries = require('./dbQueries/wellDataRoQueries')
const wellDataTempQueries = require('./dbQueries/wellDataTempQueries')
const wellsQueries = require('./dbQueries/wellsQueries')
const processesData = require('./data/processesData')
const indexData = require('./data/indexData')
const boundaryConditionQueries = require('./dbQueries/boundaryConditionQueries')
const exercisesAnswersQueries = require('./dbQueries/exercisesAnswersQueries')
const {entryData, bodyToPost} = require('./functions/exercisesAnswers')
const fetch = require('node-fetch')
const {apiUrlExercises} = require('./data/schemasimData')

//get DB Data
async function getData(idRoute,idWell){
  const processName = 'simulation'
  const baseData = await baseDataQueries.baseData(idWell)
  const well = await wellsQueries.wellName(idWell)

  //processes data
  const processData = processesData.filter(process => process.name == processName)[0]
  const idContinueRoute = parseInt(idRoute) + 1
  const route = '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idRoute)[0].route
  const idBackRoute = parseInt(idRoute) - 1
  const continueRoute = '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idContinueRoute)[0].route
  const backRoute = idBackRoute == 0 ? 'NA' : '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idBackRoute)[0].route

  //well data
  const lithologies = await baseDataQueries.lithologies(idWell)
  const pses = await baseDataQueries.pses(idWell)
  const cots = await baseDataQueries.cots(idWell)
  const cinetics = await baseDataQueries.cinetics(idWell)
  const his = await baseDataQueries.his(idWell)
  const wellDataTemp = await wellDataTempQueries.wellDataTemp(idWell)
  const wellDataRo = await wellDataRoQueries.wellDataRo(idWell)
  const hfs = await boundaryConditionQueries.wellHf(idWell)
  const swits = await boundaryConditionQueries.wellSwit(idWell)
  const pwds = await boundaryConditionQueries.wellPwd(idWell)

  const data = {well,baseData,lithologies,pses,cots,cinetics,his,indexData,processData,idWell,idRoute,continueRoute,backRoute,wellDataTemp,wellDataRo,hfs,swits,pwds,route}

  return data
}

const baseDataController = {
  baseData: async(req,res) =>{
    try{
      //specific info
      const idRoute = 2
      const ejsTable = 'baseData'
      const title = 'Datos base'

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
  baseDataValidation: async(req,res) =>{
    try{

      //specific info
      const idRoute = 2
      const ejsTable = 'baseData'
      const title = 'Datos base'

      //common info
      const idWell = req.params.idWell
      var validation = 'fail'
      const data = await getData(idRoute,idWell)
      const idUser = req.session.userLogged.id_user

      //get correct data from table
      var dataToCompare = {}

      data.baseData.forEach(row => {
        Object.keys(row).forEach(key => {
          const keyName = key + '_' + row.id_layers
          dataToCompare[keyName] = row[key]
        })
      })

      //compare correct data to req.body
      var errors = []
      
      Object.keys(req.body).forEach(key => {
        if ((dataToCompare[key] != undefined && (parseFloat(req.body[key].replace(',','.')) != parseFloat(dataToCompare[key])) || (dataToCompare[key] == null && req.body[key]!= 'default'))) {
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
  dataInWell: async(req,res) =>{
    try{
      //specific info
      const idRoute = 3
      const ejsTable = 'dataInWell'
      const title = 'Datos en pozo'

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
  dataInWellValidation: async(req,res) =>{
    try{
      //specific info
      const idRoute = 3
      const ejsTable = 'dataInWell'
      const title = 'Datos en pozo'

      //common info
      const idWell = req.params.idWell
      var validation = 'fail'
      const data = await getData(idRoute,idWell)
      const idUser = req.session.userLogged.id_user

      ///get correct data from database

      //wellDataTemp
      var tempDataToCompare = {}

      data.wellDataTemp.forEach(row => {
        Object.keys(row).forEach(key => {
          const keyName = 'temp_' + key + '_' + row.id
          tempDataToCompare[keyName] = row[key]
        })
      })

      //wellDataRo
      var roDataToCompare = {}

      data.wellDataRo.forEach(row => {
        Object.keys(row).forEach(key => {
          const keyName = 'ro_' + key + '_' + row.id
          roDataToCompare[keyName] = row[key]
        })
      })

      const dataToCompare = { ...tempDataToCompare, ...roDataToCompare}

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

      //save axercises answers
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
  boundaryCondition: async(req,res) =>{
    try{
      //specific info
      const idRoute = 4
      const ejsTable = 'boundaryCondition'
      const title = 'Condición de frontera'

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
  boundaryConditionValidation: async(req,res) =>{
    try{
      
      //specific info
      const idRoute = 4
      const ejsTable = 'boundaryCondition'
      const title = 'Condición de frontera'

      //common info
      const idWell = req.params.idWell
      var validation = 'fail'
      const data = await getData(idRoute,idWell)
      const idUser = req.session.userLogged.id_user
      const token = req.session.userLogged.tokenHashed

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

      //save axercises answers
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
      const processData = processesData.filter(process => process.name == 'simulation')[0]
      const chartData = processData.charts.filter(chart => chart.routeParam == chartRouteParam)[0]
      const idRoute = processData.routes.filter(route => route.idChart == chartData.id)[0].id
      const idContinueRoute = idRoute + 1
      var idBackRoute = idRoute == 6 ? idRoute - 2 : idRoute - 1
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
module.exports = baseDataController

