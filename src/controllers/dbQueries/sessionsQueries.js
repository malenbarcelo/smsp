const db = require('../../../database/models')
const sequelize = require('sequelize')

const sessionsQueries = {
    deleteSessionData: async(idUser,idWell,idExercise) => {
        await db.Sessions.destroy({
            where:{
                id_wells:idWell,
                id_users:idUser,
                id_exercises:idExercise
            }
        })
    },
    createSession: async(idUser,idWell,idExercise) => {

        const timestamp = new Date().getTime()

        await db.Sessions.create({
            id_wells:idWell,
            id_users:idUser,
            id_exercises:idExercise,
            login: timestamp
        })
    },
    createStepSession: async(idUser,idWell,idExercise,stepName,login) => {
        await db.Steps_sessions.create({
            id_wells:idWell,
            id_users:idUser,
            id_exercises:idExercise,
            step:stepName,
            login: login
        })
    },
    deleteStepSessionData: async(idUser,idWell,idExercise,stepName) => {
        await db.Steps_sessions.destroy({
            where:{
                id_wells:idWell,
                id_users:idUser,
                id_exercises:idExercise,
                step:stepName
            }
        })
    },
    findSession: async(idUser,idWell,idExercise) => {

        const session = await db.Sessions.findOne({
            where:{
                id_wells:idWell,
                id_users: idUser,
                id_exercises:idExercise
            },
            raw:true,
        })
        return session
    },
    findStepSession: async(idUser,idWell,idExercise,stepName) => {

        const stepSession = await db.Steps_sessions.findOne({
            where:{
                id_wells:idWell,
                id_users: idUser,
                id_exercises:idExercise,
                step:stepName
            },
            raw:true,
        })
        return stepSession
    },
}

module.exports = sessionsQueries