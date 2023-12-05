const {saveAnswers,bodyToPost} = require('./functions/exercisesAnswers.js')
const {getRoutes,getData} = require('./functions/getProcessData.js')
const processesData = require('./data/processesData.js')
const wellsQueries = require('./dbQueries/wellsQueries.js')
const sessionsQueries = require('./dbQueries/sessionsQueries.js')
const {getDataToCompare,getObservations,getColumnsMargins} = require('./functions/validations.js')
const fetch = require('node-fetch')
const {apiUrlExercises} = require('./data/schemasimData')

const dataAndSensibilityController = {
  viewTable: async(req,res) =>{
    try{

      //get general info
      const idWell = req.params.idWell
      const processName = req.params.processName
      let validation = 'fail'
      const data = await getData(idWell,processName)
      const routeParam = data.processData.routeParam
      const stepAlias = req.params.stepAlias ? req.params.stepAlias : processName
      const stepData = data.processData.exercisesData.steps.filter(step => step.alias == stepAlias)[0]
      const stepName = stepData.stepName 
      const idRoute = stepData.idRoute
      const ejsTable = stepData.ejsTable
      const title = stepData.title
      const routes = await getRoutes(idRoute,idWell,data.processData,routeParam)
      const idIndexData = data.processData.routes[idRoute - 1].idIndexData
      const idUser = req.session.userLogged.id_user
      const idExercise = data.processData.exercisesData.idExercise.filter( exercise => exercise.idWells == idWell)[0].idExercises

      //create step session
      const login = new Date().getTime() //login time
      await sessionsQueries.deleteStepSessionData(idUser,idWell,idExercise,stepName) //delete session if exists
      await sessionsQueries.createStepSession(idUser,idWell,idExercise,stepName,login) //create new session

      //render tables ejs
      return res.render('tables',{
        title,
        data,
        validation,
        ejsTable,
        routes,
        idIndexData,
        processName,
        idWell
      })

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  dataValidation: async(req,res) =>{
    try{
      //get general info
      const idWell = req.params.idWell
      const processName = req.params.processName
      let validation = 'fail'
      const data = await getData(idWell,processName)
      const routeParam = data.processData.routeParam
      const stepAlias = req.params.stepAlias ? req.params.stepAlias : processName
      const stepData = data.processData.exercisesData.steps.filter(step => step.alias == stepAlias)[0]
      const stepName = stepData.stepName 
      const idRoute = stepData.idRoute
      const ejsTable = stepData.ejsTable
      const title = stepData.title
      const routes = await getRoutes(idRoute,idWell,data.processData,routeParam)
      const idIndexData = data.processData.routes[idRoute - 1].idIndexData
      const idUser = req.session.userLogged.id_user
      const idExercise = data.processData.exercisesData.idExercise.filter( exercise => exercise.idWells == idWell)[0].idExercises
      
      //gte validation info
      const token = req.session.userLogged.tokenHashed

      //get correct info from db tables or validations.js
      const dataToCompare = getDataToCompare(ejsTable,data,processName)

      //get columns margins
      const columnsMargins = getColumnsMargins(stepData)

      //compare correct data to req.body and get errors
      let errors = []
      
      Object.keys(req.body).forEach(key => {

        //get column name
        const arrayKey = key.split('_')
        const columnData = [...arrayKey]
        columnData.pop()
        if (stepData.tables.length > 1) {
          columnData.shift()
        }
        const columnName = columnData.join('_')

        //get margin
        const margin = columnsMargins.filter( column => column.columnName == columnName)[0].columnMargin

        //get errors
        const enteredData = req.body[key] === '' ? '' : parseFloat(req.body[key].replace(',','.'),2)
        const correctData = dataToCompare[key] === null ? '' : parseFloat(dataToCompare[key])

        if (correctData === 0 && enteredData !== 0) {
          errors.push(key)
        }
        if (correctData != '') {
          if (enteredData == '') {
          }
          if (correctData < 0 && (enteredData < correctData * (1+margin) || enteredData > correctData * (1-margin))) {
            errors.push(key)
          }
          if (correctData >= 0 && (enteredData < correctData * (1-margin) || enteredData > correctData * (1+margin))) {
            errors.push(key)
          }
        }
      })

      if (errors.length == 0) {
        validation = 'passed'
      }

      //get errors observations
      const observations = getObservations(stepData,errors)
      
      //save exercises answers
      await saveAnswers(data,stepData,idUser,errors,idWell,idExercise,observations)

      //post info to schemasim if step is the last of the exercise
      const stepsQty = data.processData.exercisesData.steps.length
      const idStep = stepData.idStep

      if (stepsQty == idStep && errors.length == 0) {

        validation = 'passed'

        const body = await bodyToPost(data,idWell,idUser,token,idExercise)

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
        routes,
        idIndexData,
        errors,
        oldData: req.body,
        processName,
        idWell
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
      const processName = req.params.processName
      const well = await wellsQueries.wellName(idWell)
      const processData = processesData.filter(process => process.name == processName)[0]
      const routeParam = processData.routeParam      
      const chartData = processData.charts.filter(chart => chart.routeParam == chartRouteParam)[0]
      const idRoute = processData.routes.filter(route => route.idChart == chartData.id)[0].id
      const routes = await getRoutes(idRoute,idWell,processData,routeParam)
      const idIndexData = processData.routes[idRoute - 1].idIndexData

      const data = {well,processData,routes,idIndexData,idRoute,chartData}

      return res.render('charts',{title:chartData.title,data,idIndexData,routes,processName,idWell})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  instructions: async(req,res) =>{
    try{

      const idWell = req.params.idWell
      const continueRoute = '/sensibility/' + idWell + '/' + 'toc-sensibility'
      const idIndexData = 8
      const processName = 'toc-sensibility'

      return res.render('sensibilityInstructions',{title:'Ejercicios de simulación',continueRoute,idIndexData,
      idWell,processName})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
}
module.exports = dataAndSensibilityController

