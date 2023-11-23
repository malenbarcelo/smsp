const db = require('../../database/models')
const sequelize = require('sequelize')
const wellsQueries = require('./dbQueries/wellsQueries')
const calibrationQueries = require('./dbQueries/calibrationQueries')
const baseDataQueries = require('./dbQueries/baseDataQueries')
const exercisesAnswersQueries = require('./dbQueries/exercisesAnswersQueries')
const pseQueries = require('./dbQueries/pseQueries')
const processesData = require('./data/processesData')
const indexData = require('./data/indexData')
const validations = require('./data/validations')
const pseTablesData = require('./data/pseTablesData')
const { Constants } = require('adm-zip/util')
const {pseAndSensibility, bodyToPost} = require('./functions/exercisesAnswers')
const fetch = require('node-fetch')
const {apiUrlExercises} = require('./data/schemasimData')

//get DB Data
async function getData(idWell,idRoute){

  //well data
  const well = await wellsQueries.wellName(idWell)
  const baseData = await baseDataQueries.baseData(idWell)
  
  //processes data
  const processName='pse-table'
  const processData = processesData.filter(process => process.name == processName)[0]

  const idContinueRoute = parseInt(idRoute) + 1

  const idBackRoute = parseInt(idRoute) - 1
  const continueRoute = '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idContinueRoute)[0].route
  const backRoute = idBackRoute == 0 ? 'NA' : '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idBackRoute)[0].route

  const data = {processData,continueRoute,backRoute,indexData,idRoute,well,baseData}

  return data
}

//get elements data
async function getElementsData(data){
  var elements = []
  var elementsData = []
  data.baseData.forEach(baseDataElement => {
    if (!elements.includes(baseDataElement.id_pse)) {
      elements.push(baseDataElement.id_pse)
    }
  })
  for (let i = 0; i < elements.length; i++) {
    const pse = await pseQueries.pse(elements[i])
    const pseData = await baseDataQueries.getPseData(elements[i])
    elementsData.push({
      'id_pse':elements[0],
      'pse':pse.pse,
      'color':pse.color,
      'depo_from': pseData.depo_from,
      'depo_until': pseData.depo_until
    })
  }
  return elementsData
}

const pseTableController = {
  pseTable: async(req,res) =>{
    try{
      const idWell = req.params.idWell
      const idRoute = 2
      let validation = 'fail'
      idUser = req.session.userLogged.id_user

      const data = await getData(idWell,idRoute)
      const elementsData = await getElementsData(data)
      const pseInputsData = await pseQueries.pseInputsData(idWell,idUser)

      data.chartData = {
        'idChartsMenu':1
      }

      data.idBackButton = 'pseTable_' + idWell

      return res.render('pseTable',{title:'Tabla Resumen PSE',elementsData,data,validation,pseInputsData})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  pseTableValidation: async(req,res) =>{
    try{

      const idWell = req.params.idWell
      const idRoute = 2
      let validation = 'fail'
      const pseTableData = pseTablesData.filter(data => data.idWell == idWell)[0]
      const data = await getData(idWell,idRoute)
      const elementsData = await getElementsData(data)
      const idUser = req.session.userLogged.id_user
      const token = req.session.userLogged.tokenHashed
      const stepName = data.processData.exercisesData.steps[0].stepName
      const exerciseName = data.processData.exercisesData.exerciseName
            
      //add info to data
      data.chartData = {
        'idChartsMenu': 1
      }

      data.idBackButton = 'pseTable_' + idWell

      //get errors
      const errors = []
      let fromObservations = ''
      let toObservations = ''
      const body = []      

      for (let i = 1; i <= pseTableData.inputs; i++) {
        body.push({
          'process':req.body['process_' + i],
          'from_value':req.body['from_' + i],
          'to_value':req.body['to_' + i],
          'color':req.body['color_' + i],
          'input':i
        })
      }
      
      var dataToCompare = validations.pseTable      

      body.forEach(element => {
        const process = dataToCompare.filter( data => data.processName == element.process)[0]

        if (!(element.from_value > process.from - process.margin && element.from_value < process.from  + process.margin)) {
          errors.push('from_' + element.input)
          fromObservations += fromObservations == '' ? ('Desde = [' + element.process) : (', ' + element.process)
        }
        if (!(element.to_value > process.to - process.margin && element.to_value < process.to  + process.margin)) {
          errors.push('to_' + element.input)
          toObservations += toObservations == '' ? (' - Hasta = [' + element.process) : (', ' + element.process)
        }        
      })

      fromObservations += fromObservations != '' ? ']' : ''
      toObservations += toObservations != '' ? ']' : ''

      const observations = fromObservations + toObservations

      if (errors.length == 0) {
        validation = 'passed'
      }

      body.forEach(element => {
        element.from_is_invalid = errors.includes('from_' + element.input) ? 1 : 0
        element.to_is_invalid = errors.includes('to_' + element.input) ? 1 : 0
      })

      //save data in pse_data_saved
      await pseQueries.pseSaveData(idWell,idUser,body)

      //save data in exercises_answers
      await pseAndSensibility(idWell, idUser, exerciseName, stepName, observations,errors)

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


      const pseInputsData = await pseQueries.pseInputsData(idWell,idUser)

      return res.render('pseTable',{
        title:'Tabla Resumen PSE',
        elementsData,
        data,
        validation,
        pseInputsData
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
      const processData = processesData.filter(process => process.name == 'pse-table')[0]
      const chartData = processData.charts.filter(chart => chart.routeParam == chartRouteParam)[0]
      const idRoute = processData.routes.filter(route => route.idChart == chartData.id)[0].id
      const idContinueRoute = parseInt(idRoute) + 1
      var idBackRoute = parseInt(idRoute) - 1
      const continueRoute = '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idContinueRoute)[0].route
      const backRoute = idBackRoute == 0 ? 'NA' : '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idBackRoute)[0].route
      
      const data = {well,processData,continueRoute,backRoute,indexData,idRoute,chartData}

      return res.render('charts',{title:chartData.title,data})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  }
}
module.exports = pseTableController

