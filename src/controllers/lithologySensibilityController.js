const db = require('../../database/models')
const sequelize = require('sequelize')
const baseDataQueries = require('./dbQueries/baseDataQueries')
const wellDataRoQueries = require('./dbQueries/wellDataRoQueries')
const wellDataTempQueries = require('./dbQueries/wellDataTempQueries')
const wellsQueries = require('./dbQueries/wellsQueries')
const processesData = require('./data/processesData')
const validations = require('./data/validations')
const indexData = require('./data/indexData')
const boundaryConditionQueries = require('./dbQueries/boundaryConditionQueries')
const {pseAndSensibility, bodyToPost} = require('./functions/exercisesAnswers')
const fetch = require('node-fetch')
const {apiUrlExercises} = require('./data/schemasimData')

//get DB Data
async function getData(idRoute,idWell){
  const processName = 'lithology-sensibility'
  const baseData = await baseDataQueries.baseData(idWell)
  const well = await wellsQueries.wellName(idWell)

  //processes data
  const processData = processesData.filter(process => process.name == processName)[0]
  const idContinueRoute = parseInt(idRoute) + 1
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

  const data = {well,baseData,lithologies,pses,cots,cinetics,his,indexData,processData,idWell,idRoute,continueRoute,backRoute,wellDataTemp,wellDataRo,hfs,swits,pwds}

  return data
}

const lithologySensibilityController = {
  lithology: async(req,res) =>{
    try{
      //specific info
      const idRoute = 1
      const ejsTable = 'lithologySensibility'
      const title = 'Sensibilidad Litología'

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
  lithologyValidation: async(req,res) =>{
    try{
      //specific info
      const idRoute = 1
      const ejsTable = 'lithologySensibility'
      const title = 'Sensibilidad Cinética'
      let dataToCompare = validations.lithologySensibility1
      const errorName = 'Litología = '

      //common info
      const idWell = req.params.idWell
      var validation = 'fail'
      const data = await getData(idRoute,idWell)
      let errors = []
      let observations = ''
      const idUser = req.session.userLogged.id_user
      const token = req.session.userLogged.tokenHashed
      const stepName = data.processData.exercisesData.steps[0].stepName
      const exerciseName = data.processData.exercisesData.exerciseName

      //get errors
      Object.keys(req.body).forEach(key => {
        if ((dataToCompare[key] != req.body[key])) {

          errors.push(key)

          const row = key.split('_')[2]

          observations += '[C' + row + ']'
        }
      })

      observations = observations == '' ? '' : errorName + observations

      //save data in exercises_answers
      await pseAndSensibility(idWell, idUser, exerciseName, stepName, observations,errors)

      //post info to schemasim
      if (errors.length == 0) {

        validation = 'passed'

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
      const processData = processesData.filter(process => process.name == 'lithology-sensibility')[0]

      const chartData = processData.charts.filter(chart => chart.routeParam == chartRouteParam)[0]

      const idRoute = processData.routes.filter(route => route.idChart == chartData.id)[0].id

      const idContinueRoute = idRoute + 1
      var idBackRoute = idRoute == 3 ? idRoute - 2 : idRoute - 1
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
module.exports = lithologySensibilityController

