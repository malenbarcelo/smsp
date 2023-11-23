const db = require('../../database/models')
const wellsQueries = require('./dbQueries/wellsQueries')
const exercisesAnswersQueries = require('./dbQueries/exercisesAnswersQueries')
const pseQueries = require('./dbQueries/pseQueries')
const processesData = require('./data/processesData')
const indexData = require('./data/indexData')
const fetch = require('node-fetch')
const {apiUrlUsers} = require('../controllers/data/schemasimData')
const {validationResult} = require('express-validator')

//get DB Data
async function getData(processName,idRoute,idWell){
  const wells = await wellsQueries.allWells()
  const processData = processesData.filter(process => process.name == processName)[0]  
  const idContinueRoute = idRoute + 1
  const idBackRoute = idRoute - 1
  const continueRoute = '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idContinueRoute)[0].route
  const backRoute = idBackRoute == 0 ? 'NA' : '/' + processData.name + '/' + idWell + processData.routes.filter(route => route.id == idBackRoute)[0].route
  const data = {wells,indexData,processData,idWell,idRoute,continueRoute,backRoute}
  return data
}

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
      userToLogin.email = req.body.email

      req.session.userLogged = userToLogin

      const processData = processesData.filter(process => process.name == processName)[0]
      
      const continueRoute = processData.routes[0].route

      const exerciseName = processData.exercisesData.exerciseName

      //delete exercises data from database
      await exercisesAnswersQueries.deleteExercisesAnswers(userToLogin.id_user,idWell,exerciseName)

      //if process is PSE table, then restablish pse_data_saved data
      await pseQueries.restablishData(userToLogin.id_user,idWell)

      return res.redirect('/' + processName + '/' + idWell + continueRoute)

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  well: async(req,res) =>{
    try{

      const idRoute = 1
      const processName = req.params.processName
      const idWell = req.params.idWell

      const data = await getData(processName,idRoute,idWell)

      return res.render('well',{title:'Pozo',data})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  process: async(req,res) =>{
    try{

      var idRoute = 2
      const processName = req.params.processName
      const processDesc = req.params.processDesc

      if (processDesc == 'thermal' || processDesc == 'simulation') {
        idRoute = 5
      }
      if (processDesc == 'toc') {
        idRoute = 3
      }
      if (processDesc == 'kinetic-2' || processDesc == 'lithology-2') {
        idRoute = 7
      }

      const idWell = req.params.idWell

      const data = await getData(processName,idRoute,idWell)

      return res.render('process',{title:'Simulación en progreso',data})

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
      const idUser = req.session.userLogged.id_user
      const exerciseName = processData.exercisesData.exerciseName

      const data = {processData,indexData,idRoute}

      const exerciseAnswers = await exercisesAnswersQueries.findAnswers(idUser,idWell,exerciseName)

      return res.render('endProcess',{title:'Fin del proceso',data,exerciseAnswers})

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
}
module.exports = indexController

