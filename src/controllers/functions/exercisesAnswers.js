const db = require('../../../database/models')
const sequelize = require('sequelize')
const exercisesAnswersQueries = require('../dbQueries/exercisesAnswersQueries')
const {simulatorsData} = require('../data/schemasimData')
const bcrypt = require('bcryptjs')
const sessionsQueries = require('../dbQueries/sessionsQueries')

const exercisesAnswers = {

    saveAnswers: async(data,stepData,idUser,errors,idWell,idExercise,observations) => {

        const exerciseName = data.processData.exercisesData.exerciseName
        const stepName = stepData.stepName
        const idStep = stepData.idStep
        const stepsQty = data.processData.exercisesData.steps.length
        const allowedAttemps = stepData.allowedAttemps
        
        const findStep = await exercisesAnswersQueries.findStep(idWell, idUser, exerciseName, stepName)

        //create or update exercises answers table
        const stepSession = await sessionsQueries.findStepSession(idUser,idWell,idExercise,stepName)

        if (findStep.length == 0) {
            const stepAnswer = {
                'id_wells': idWell,
                'id_users': idUser,
                'exercise': exerciseName,
                'grade':errors.length == 0 ? 100 : (parseFloat(100 - (100 / stepData.allowedAttemps),2)),
                'step': stepName,
                'login':stepSession.login, //login time
                'logout':errors.length != 0 ? null : new Date().getTime(), //logout time
                'logTime':errors.length != 0 ? null : ((new Date().getTime() - stepSession.login)/1000), //log time in secs
                'type': errors.length == 0 ? 'Paso realizado correctamente' : 'Error',
                'observations': errors.length == 0 ? '' : 'INTENTO ' + (findStep.length + 1) + ': ' + observations,
                'try':1,
                'stepStatus': errors.length == 0 ? 'passed' : 'fail',
                'exerciseStatus': errors.length == 0 && idStep == stepsQty ? 'done' : 'in process'
            }

            //create data in database
            await exercisesAnswersQueries.saveStepAnswer(stepAnswer)

        } else{

            const idStepAnswers = findStep[0].id
            const tryNumber = findStep.length == 0 ? 1 : (findStep[0].try + 1)
            let newObservations = findStep[0].observations

            if (tryNumber == allowedAttemps + 1 ) {
                newObservations += '\n' + 'Supera cantidad de intentos'
            }
            if (tryNumber <= allowedAttemps) {
                newObservations += '\n' + 'INTENTO ' + tryNumber + ': ' + (errors.length == 0 ? 'Paso realizado correctamente' : observations)
            }

            let grade = findStep[0].grade
            
            //get grade
            if (tryNumber >= stepData.allowedAttemps && errors.length > 0) {
                grade = 0
            }
            if (tryNumber < stepData.allowedAttemps && errors.length > 0) {
                grade = (parseFloat(100 - ((100 / stepData.allowedAttemps) * tryNumber),2))
            }
            
            //update data in database
            const login = findStep[0].login //login time
            const logout = new Date().getTime() //logout time
            const logTime = (logout - login)/1000 //log time in secs
            const stepStatus = errors.length == 0 ? 'passed' : 'fail'
            const exerciseStatus = errors.length == 0 && idStep == stepsQty ? 'done' : 'in process'

            await exercisesAnswersQueries.updateStepAnswer(idStepAnswers,tryNumber,newObservations,grade,logout,logTime,stepStatus,exerciseStatus)

            //if step==last step and errors == 0 --> update steps data
            if (errors.length == 0 && idStep == stepsQty) {
                await exercisesAnswersQueries.updateExerciseStatus(idWell,idUser,exerciseName)
            }
        }
    },
    bodyToPost: async(data,idWell,idUser,token,idExercise) => {

        const exerciseName = data.processData.exercisesData.exerciseName
        const date = new Date()
        const timestamp = date.getTime()
        
        const simulatorId = simulatorsData.filter(simulator => simulator.idWell == idWell)[0].simulatorId

        //get all exercise steps
        const exerciseAnswers = await exercisesAnswersQueries.findAnswers(idUser,idWell,exerciseName)
        
        //calculate grade
        let gradesSum = 0

        exerciseAnswers.forEach(answer => {
            gradesSum += parseFloat(answer.grade,2)
        })

        const grade = gradesSum / exerciseAnswers.length

        //calculate log_time
        const session = await sessionsQueries.findSession(idUser,idWell,idExercise)
        const login = session.login
        const logout = new Date().getTime()
        const durationSecs = (logout - login)/1000

        //create body to post
        const body = {
          'id_exercises':idExercise,
          'id_users':idUser,
          'id_simulators': simulatorId,
          'date':timestamp,
          'grade':grade,
          'duration_secs':parseInt(durationSecs),
          'token_hashed':bcrypt.hashSync(token,10),
          'answers':[]
        }

        exerciseAnswers.forEach(answer => {
            body.answers.push({
                'description':answer.step,
                'log_time':answer.log_time,
                'type':answer.type,
                'observations':answer.observations
            })            
        })
          return body
      }
}

module.exports = exercisesAnswers

