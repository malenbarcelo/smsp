const db = require('../../../database/models')
const sequelize = require('sequelize')

const boundaryConditionQueries = {
    wellHf: async(idWell) => {
        const wellHf = await db.Boundary_condition_hf.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return wellHf
    },
    wellSwit: async(idWell) => {
        const wellSwit = await db.Boundary_condition_swit.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return wellSwit
    },
    wellPwd: async(idWell) => {
        const wellPwd = await db.Boundary_condition_pwd.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return wellPwd
    },

}

module.exports = boundaryConditionQueries