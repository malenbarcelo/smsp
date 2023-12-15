const {saveAnswers,saveProvisionalData,bodyToPost} = require('./functions/exercisesAnswers.js')
const {getRoutes,getData} = require('./functions/getProcessData.js')
const processesData = require('./data/processesData.js')
const wellsQueries = require('./dbQueries/wellsQueries.js')
const sessionsQueries = require('./dbQueries/sessionsQueries.js')
const exercisesAnswersQueries = require('./dbQueries/exercisesAnswersQueries')
const {getDataToCompare,getObservations,getColumnsMargins} = require('./functions/validations.js')
const fetch = require('node-fetch')
const {apiUrlExercises} = require('./data/schemasimData.js')

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
      //const idUser = req.session.userLogged.id_user
      const idUser = userLogged.id_user

      const idExercise = data.processData.exercisesData.idExercise.filter( exercise => exercise.idWells == idWell)[0].idExercises
      const exerciseName = data.processData.exercisesData.exerciseName
      let confirmLogout = true
      const type = 'view'

      //findout if step has already been done      
      const findStep = await exercisesAnswersQueries.findStep(idWell, idUser, exerciseName, stepName)

      //if step has already been done, show table data. Otherwise, create step session
      if (findStep.length == 0) {
        //create step session
        const login = new Date().getTime() //login time
        await sessionsQueries.deleteStepSessionData(idUser,idWell,idExercise,stepName) //delete session if exists
        await sessionsQueries.createStepSession(idUser,idWell,idExercise,stepName,login) //create new session
      }else{
        if (findStep[0].step_status == 'passed') {
          validation = 'passed'
        }
        if (findStep[0].exercise_status == 'done') {
          confirmLogout = false
        }
      }

      //render tables ejs
      return res.render('tables',{
        title,
        data,
        validation,
        ejsTable,
        routes,
        idIndexData,
        processName,
        idWell,
        exerciseName,
        confirmLogout,
        type
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
      //const idUser = req.session.userLogged.id_user
      const idUser = userLogged.id_user
      const idExercise = data.processData.exercisesData.idExercise.filter( exercise => exercise.idWells == idWell)[0].idExercises
      const exerciseName = data.processData.exercisesData.exerciseName
      let confirmLogout = true
      const type = 'validation'

      //get validation info
      //const token = req.session.userLogged.tokenHashed
      const token = userLogged.tokenHashed


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

      //findout if step has already been done      
      const findStep = await exercisesAnswersQueries.findStep(idWell, idUser, exerciseName, stepName)
      if (findStep.length != 0 && findStep[0].exercise_status == 'done') {
        confirmLogout = false
      }

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
        idWell,
        exerciseName,
        confirmLogout,
        type
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
      let confirmLogout = false
      const exerciseName = processData.exercisesData.exerciseName
      //const idUser = req.session.userLogged.id_user
      const idUser = userLogged.id_user

      const data = {well,processData,routes,idIndexData,idRoute,chartData}

      //findout if step has already been done      
      const findExercise = await exercisesAnswersQueries.findExercise(idWell, idUser, exerciseName)

      if (findExercise.length == 0) {
        confirmLogout = true
      }

      return res.render('charts',{title:chartData.title,data,idIndexData,routes,processName,idWell,confirmLogout,exerciseName})

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
      const confirmLogout = false

      return res.render('sensibilityInstructions',{title:'Ejercicios de simulación',continueRoute,idIndexData,
      idWell,processName,confirmLogout})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
}
module.exports = dataAndSensibilityController

