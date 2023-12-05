const db = require('../../../database/models')
const sequelize = require('sequelize')

const exercisesAnswersQueries = {
    findStep: async(idWell,idUser,exercise,step) => {
        const findStep = await db.Exercises_answers.findAll({
            where:{
                id_wells:idWell,
                id_users:idUser,
                exercise:exercise,
                step:step
            },
            raw:true,
        })
        return findStep
    },
    saveStepAnswer: async(stepAnswer) => {

        await db.Exercises_answers.create({
            id_wells:stepAnswer.id_wells,
            id_users:stepAnswer.id_users,
            exercise:stepAnswer.exercise,
            step:stepAnswer.step,
            login:stepAnswer.login,
            logout:stepAnswer.logout,
            log_time:stepAnswer.logTime,
            grade:stepAnswer.grade,
            type:stepAnswer.type,
            observations:stepAnswer.observations,
            try:stepAnswer.try,
        })
    },
    updateStepAnswer: async(idStepAnswers,tryNumber,newObservations,grade,logout,logTime) => {

        await db.Exercises_answers.update(
            {
            try:tryNumber,
            grade:grade,
            logout:logout,
            log_time:logTime,
            observations:newObservations
            },
            {where:{
                id: idStepAnswers
            }}
        )
    },
    findAnswers: async(idUser,idWell,exerciseName) => {
        const findAnswers = await db.Exercises_answers.findAll({
            where:{
                id_wells:idWell,
                id_users:idUser,
                exercise:exerciseName
            },
            order:[['step','ASC'],['try','ASC']],
            raw:true,
        })
        return findAnswers
    },
    deleteExercisesAnswers: async(idUser,idWell,exerciseName) => {
        await db.Exercises_answers.destroy({
            where:{
                id_wells:idWell,
                id_users:idUser,
                exercise:exerciseName
            }
        })
    }
}

module.exports = exercisesAnswersQueries