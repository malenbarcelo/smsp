const db = require('../../../database/models')
const sequelize = require('sequelize')
const exercisesAnswersQueries = require('../dbQueries/exercisesAnswersQueries')
const {simulatorsData} = require('../data/schemasimData')
const bcrypt = require('bcryptjs')

const exercisesAnswers = {

    entryData: async(data,idRoute,idUser,errors) => {

        const stepsData = data.processData.exercisesData.steps

        const step = stepsData.filter(stepData => stepData.idRoute == idRoute)[0]
        const tables = step.tables
        const exerciseName = data.processData.exercisesData.exerciseName
        const stepName = step.stepName
        const idWell = data.well.id        
        let observations = tables.length == 1 ? (tables[0].alias + ' = ') : ''

        const findStep = await exercisesAnswersQueries.findStep(idWell, idUser, exerciseName, stepName)

        //write observations if corresponds...if errors > 10 resume data
        let errorsResumed = []
        if (errors.length > 10) {
            errorsResumed = errors.slice(0, 9)
            const lastError = errors[errors.length-1]
            errorsResumed.push(lastError)
        }else{
            errorsResumed = errors
        }

        errorsResumed.forEach((error,i) => {

            const errorData = error.split('_')
                        
            const errorAlias = tables.length == 1 ? tables[0].alias : errorData[0]
            const rowNumber = errorData[errorData.length-1]
          
            if (tables.length != 1) {
                errorData.shift()
            }
            
            errorData.pop()
            
            const errorColumn = errorData.join('_')
          
            const table = tables.filter(table => table.alias == errorAlias)[0]            

            const columnNumber = table.columns.filter(column => column.columnName == errorColumn)[0].idColumn

            if (i == 9 && errors.length > errorsResumed.length) {
                observations += '...'
            }

            if (tables.length == 1) {
                observations += '[C:' + columnNumber + ' F:' + rowNumber + ']'
            }else{
                observations += (observations != '' ? ', ' : '') + errorAlias + ' = [C:' + columnNumber + ' F:' + rowNumber + ']'
            }
        })

        //create or update exercises answers tables
        if (findStep.length == 0) {
            const stepAnswer = {
                'id_wells': idWell,
                'id_users': idUser,
                'exercise': exerciseName,
                'step': stepName,
                'type': errors.length == 0 ? 'Paso realizado correctamente' : 'Error',
                'observations': errors.length == 0 ? '' : 'INTENTO ' + (findStep.length + 1) + ': ' + observations,
                'try':1
            }

            //create data in database
            await exercisesAnswersQueries.saveStepAnswer(stepAnswer)

        } else{

            const idStepAnswers = findStep[0].id
            const tryNumber = findStep.length == 0 ? 1 : (findStep[0].try + 1)
            const newObservations = findStep[0].observations + '\n' + 'INTENTO ' + tryNumber + ': ' + (errors.length == 0 ? 'Paso realizado correctamente' : observations)
            
            //update data in database
            await exercisesAnswersQueries.updateStepAnswer(idStepAnswers,tryNumber,newObservations)
        }
    },
    pseAndSensibility: async(idWell,idUser,exerciseName,stepName,observations,errors) => {

        const findStep = await exercisesAnswersQueries.findStep(idWell, idUser, exerciseName, stepName)

        //create or update exercises answers tables
        if (findStep.length == 0) {
            const stepAnswer = {
                'id_wells': idWell,
                'id_users': idUser,
                'exercise': exerciseName,
                'step': stepName,
                'type': errors.length == 0 ? 'Paso realizado correctamente' : 'Error',
                'observations': errors.length == 0 ? '' : 'INTENTO ' + (findStep.length + 1) + ': ' + observations,
                'try':1
            }

            //create data in database
            await exercisesAnswersQueries.saveStepAnswer(stepAnswer)

        } else{

            const idStepAnswers = findStep[0].id
            const tryNumber = findStep.length == 0 ? 1 : (findStep[0].try + 1)
            const newObservations = findStep[0].observations + '\n' + 'INTENTO ' + tryNumber + ': ' + (errors.length == 0 ? 'Paso realizado correctamente' : observations)
            
            //update data in database
            await exercisesAnswersQueries.updateStepAnswer(idStepAnswers,tryNumber,newObservations)
        }
    },
    bodyToPost: async(data,idUser,token) => {

        const exerciseName = data.processData.exercisesData.exerciseName
        const idWell = data.well.id
        const date = new Date()
        const timestamp = date.getTime()
        const idsExercise = data.processData.exercisesData.idExercise
        const idExercise = idsExercise.filter(exercise => exercise.idWells == idWell)[0].idExercises

        const simulatorId = simulatorsData.filter(simulator => simulator.idWell == idWell)[0].simulatorId

        //get all exercise steps
        const exerciseAnswers = await exercisesAnswersQueries.findAnswers(idUser,idWell,exerciseName)

        const body = {
          'id_exercises':idExercise,
          'id_users':idUser,
          'id_simulators': simulatorId,
          'date':timestamp,
          'grade':85.00,
          'duration_secs':780,
          'token_hashed':bcrypt.hashSync(token,10),
          'answers':[]
        }

        exerciseAnswers.forEach(answer => {
            body.answers.push({
                'description':answer.step,
                'log_time':0,
                'type':answer.type,
                'observations':answer.observations
            })
            
        })

          return body
        
      }
}

module.exports = exercisesAnswers

