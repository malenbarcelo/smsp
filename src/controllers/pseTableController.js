const wellsQueries = require('./dbQueries/wellsQueries')
const sessionsQueries = require('./dbQueries/sessionsQueries')
const pseQueries = require('./dbQueries/pseQueries')
const processesData = require('./data/processesData')
const indexData = require('./data/indexData')
const validations = require('./data/validations')
const pseData = require('./data/pseTablesData')
const {saveAnswers, bodyToPost} = require('./functions/exercisesAnswers')
const fetch = require('node-fetch')
const {apiUrlExercises} = require('./data/schemasimData')
const {getRoutes,getResumedData} = require('./functions/getProcessData')
const exercisesAnswersQueries = require('./dbQueries/exercisesAnswersQueries')

const pseTableController = {
  pseTable: async(req,res) =>{
    try{
      const idWell = req.params.idWell
      const idRoute = 2
      let validation = 'fail'
      const idUser = userLogged.id_user
      const idIndexData = 7
      const routeParam = 'pse-table'
      const processName = 'pse-table'
      const data = await getResumedData(idWell,processName)
      const routes = await getRoutes(idRoute,idWell,data.processData,routeParam)
      const pseInputsData = await pseQueries.pseInputsData(idWell,idUser)
      const pseWellData = pseData.filter(data => data.idWell == idWell)[0]
      const stepData = data.processData.exercisesData.steps.filter(step => step.alias == processName)[0]
      const exerciseName = data.processData.exercisesData.exerciseName
      let confirmLogout = true
      const type = 'view'
      
      data.chartData = {
        'idChartsMenu':1
      }

      data.idBackButton = 'pseTable_' + idWell

      //create ranges width and right
      const pseWidth = pseWellData.pseWidth
      const ma = pseWellData.ma

      pseWellData.tableData.forEach(element => {
        element.ranges.forEach(range => {
          const from = range.from > 200 ? 200 : range.from //because Jurasico goes up to 200
          range.right = (range.to * (pseWidth / ma)).toFixed(3)
          range.width = ((from - range.to) * (pseWidth / ma)).toFixed(3)
        })
      })

      //create step session
      const login = new Date().getTime() //login time
      const idExercise = data.processData.exercisesData.idExercise.filter( exercise => exercise.idWells == idWell)[0].idExercises
      const stepName = stepData.stepName
      await sessionsQueries.deleteStepSessionData(idUser,idWell,idExercise,stepName) //delete session if exists
      await sessionsQueries.createStepSession(idUser,idWell,idExercise,stepName,login) //create new session

      //findout if pse table data has already been completed and passed
      const findStep = await exercisesAnswersQueries.findStep(idWell, idUser, exerciseName, stepName)
      const findPseDataSaved = await pseQueries.pseInputsData(idWell,idUser)
      let errors = 0
      findPseDataSaved.forEach(element => {
        if (element.from_is_invalid == 1 || element.to_is_invalid == 1) {
          errors += 1
        }
      })
      
      if (findStep.length != 0 && errors == 0) {
        validation = 'passed'
      }

      if (findStep.length != 0 && findStep[0].exercise_status == 'done') {
        confirmLogout = false
      }

      return res.render('pseTable',{
        title:'Tabla Resumen PSE',
        data,
        validation,
        pseInputsData,
        pseWellData,
        idIndexData,
        routes,
        processName,
        idWell,
        confirmLogout,
        exerciseName,
        type
      })

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
      const routeParam = 'pse-table'
      const processName = 'pse-table'
      const pseWellData = pseData.filter(data => data.idWell == idWell)[0]
      const data = await getResumedData(idWell,processName)
      const stepData = data.processData.exercisesData.steps.filter(step => step.alias == processName)[0]
      //const idUser = req.session.userLogged.id_user
      const idUser = userLogged.id_user
      //const token = req.session.userLogged.tokenHashed
      const token = userLogged.tokenHashed
      const stepName = data.processData.exercisesData.steps[0].stepName
      const exerciseName = data.processData.exercisesData.exerciseName
      const idIndexData = 7
      const routes = await getRoutes(idRoute,idWell,data.processData,routeParam)
      const idExercise = data.processData.exercisesData.idExercise.filter( exercise => exercise.idWells == idWell)[0].idExercises
      let confirmLogout = true
      const type = 'validation'

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

      for (let i = 1; i <= pseWellData.inputs; i++) {
        body.push({
          'process':req.body['process_' + i],
          'from_value':req.body['from_' + i],
          'to_value':req.body['to_' + i],
          'color':req.body['color_' + i],
          'input':i
        })
      }

      var dataToCompare = validations.pseTable.filter(validation => validation.idWell == idWell)[0].validations

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

      //save exercises answers
      await saveAnswers(data,stepData,idUser,errors,idWell,idExercise,observations)

      //findout if step has already been done      
      const findStep = await exercisesAnswersQueries.findStep(idWell, idUser, exerciseName, stepName)
      if (findStep.length != 0 && findStep[0].exercise_status == 'done') {
        confirmLogout = false
      }

      //post info to schemasim
      if (errors.length == 0) {

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

      const pseInputsData = await pseQueries.pseInputsData(idWell,idUser)

      return res.render('pseTable',{
        title:'Tabla Resumen PSE',
        data,
        validation,
        pseInputsData,
        pseWellData,
        idIndexData,
        routes,
        processName,
        idWell,
        confirmLogout,
        exerciseName,
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
      const well = await wellsQueries.wellName(idWell)
      const processData = processesData.filter(process => process.name == 'pse-table')[0]
      const processName = 'pse-table'
      const chartData = processData.charts.filter(chart => chart.routeParam == chartRouteParam)[0]
      const idRoute = processData.routes.filter(route => route.idChart == chartData.id)[0].id
      const routeParam = 'pse-table'
      let confirmLogout = false
      const exerciseName = processData.exercisesData.exerciseName
      //const idUser = req.session.userLogged.id_user
      const idUser = userLogged.id_user

      //findout if step has already been done      
      const findExercise = await exercisesAnswersQueries.findExercise(idWell, idUser, exerciseName)

      if (findExercise.length == 0) {
        confirmLogout = true
      }
      
      const routes = await getRoutes(idRoute,idWell,processData,routeParam)

      const data = {well,processData,chartData}

      const idIndexData = indexData.id

      return res.render('charts',{title:chartData.title,data,routes,idIndexData,processName,idWell,confirmLogout,exerciseName})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  }
}
module.exports = pseTableController

