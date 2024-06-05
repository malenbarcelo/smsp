const exercisesAnswersQueries = require('./dbQueries/exercisesAnswersQueries')
const sessionsQueries = require('./dbQueries/sessionsQueries')
const pseQueries = require('./dbQueries/pseQueries')
const processesData = require('./data/processesData')
const indexData = require('./data/indexData')
const fetch = require('node-fetch')
const {apiUrlUsers} = require('../controllers/data/schemasimData')
const {validationResult} = require('express-validator')
const {getRoutes,getResumedData} = require('./functions/getProcessData')

const indexController = {
  index: async(req,res) =>{
    try{
      return res.render('index',{title:'Index'})
    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  login: async(req,res) =>{
    try{

      const processName = req.params.processName
      const idWell = req.params.idWell

      return res.render('login',{title:'Login',idWell,processName})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  loginProcess: async(req,res) =>{
    try{

      const processName = req.params.processName
      const idWell = req.params.idWell

      const resultValidation = validationResult(req)

      if(resultValidation.errors.length > 0){
        return res.render('login',{
          title:'Login',
          idWell,
          processName,
          errors:resultValidation.mapped(),
          oldData: req.body
        })
      }

      const response = await fetch(apiUrlUsers + req.body.email)
      const postResponse = await response.json()

      let userToLogin = postResponse
      /*userToLogin.email = req.body.email
      req.session.userLogged = userToLogin*/

      userLogged = userToLogin

      //get process data
      const processData = processesData.filter(process => process.name == processName)[0]      
      const continueRoute = processData.routes[0].route
      const exerciseName = processData.exercisesData.exerciseName
      const idExercise = processData.exercisesData.idExercise.filter(exercise => exercise.idWells == idWell)[0].idExercises
      const routeParam = processData.routeParam
      const processSteps = processData.exercisesData.steps

      ///store session data
      //delete user session data if exists
      await sessionsQueries.deleteSessionData(userToLogin.id_user,idWell,idExercise)
      //create new session
      await sessionsQueries.createSession(userToLogin.id_user,idWell,idExercise)
      
      //delete exercises data from database
      await exercisesAnswersQueries.deleteExercisesAnswers(userToLogin.id_user,idWell,exerciseName)

      //if process is PSE table, then restablish pse_data_saved data
      await pseQueries.restablishData(userToLogin.id_user,idWell)
      await pseQueries.restablishDataMomentoCritico(userToLogin.id_user,idWell)
      
      return res.redirect('/' + routeParam + '/' + idWell + continueRoute)

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  logout: (req,res) => {

    const processName = req.params.processName
    const idWell = req.params.idWell

    console.log(processName)

    req.session.destroy()

    return res.redirect('/login/' + processName + '/' + idWell)
    
  },
  well: async(req,res) =>{
    try{

      //specific info
      const idRoute = 1
      const title = 'Pozo'
      const routeParam = 'entry-data'
      const confirmLogout = false

      //get info to render
      const idWell = req.params.idWell

      const processName = req.params.processName
      
      const data = await getResumedData(idWell,processName)
      
      const routes = await getRoutes(idRoute,idWell,data.processData,routeParam)
      
      const idIndexData = data.processData.routes[idRoute - 1].idIndexData

      return res.render('well',{title,data,idIndexData,routes,processName,idWell,confirmLogout,userLogged})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  process: async(req,res) =>{
    try{

      //specific info
      const title = 'Simulación en progreso'
      let confirmLogout = false
      
      //get info to render
      const idWell = req.params.idWell
      const processName = req.params.processName
      const processDesc = req.params.processDesc
      //const idUser = req.session.userLogged.id_user
      const idUser = userLogged.id_user      
      const data = await getResumedData(idWell,processName)
      const exerciseName = data.processData.exercisesData.exerciseName

      //findout if step has already been done      
      const findExercise = await exercisesAnswersQueries.findExercise(idWell, idUser, exerciseName)

      if (findExercise.length == 0) {
        confirmLogout = true
      }

      const routeParam = data.processData.routeParam      

      const idRoute = data.processData.routes.filter(route => route.route.split('/')[1] == processName && route.route.split('/')[2] == processDesc && route.route.split('/')[3] == 'process' )[0].id

      const routes = await getRoutes(idRoute,idWell,data.processData,routeParam)

      const idIndexData = data.processData.routes[idRoute - 1].idIndexData

      return res.render('process',{title,data,routes,idIndexData,processName,idWell,confirmLogout,exerciseName})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  endProcess: async(req,res) =>{
    try{
      const idWell = req.params.idWell
      const processName = req.params.processName
      const processData = processesData.filter(process => process.name === processName)[0]
      const idRoute = processData.idEndProcessRoute
      const idBackRoute = idRoute - 1 
      //const idUser = req.session.userLogged.id_user
      const idUser = userLogged.id_user
      const exerciseName = processData.exercisesData.exerciseName
      const confirmLogout = false

      const data = {processData,indexData,idRoute}

      const exerciseAnswers = await exercisesAnswersQueries.findAnswers(idUser,idWell,exerciseName,confirmLogout)

      let gradesSum = 0

      exerciseAnswers.forEach(answer => {
          gradesSum += parseFloat(answer.grade,2)
      })

      const grade = gradesSum / exerciseAnswers.length

      return res.render('endProcess',{title:'Fin del proceso',data,exerciseAnswers,grade,processName,idWell,confirmLogout})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
}
module.exports = indexController

