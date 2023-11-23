const db = require('../../../database/models')
const sequelize = require('sequelize')

const calibrationQueries = {
    wellHf: async(idWell) => {
        const wellHf = await db.Boundary_condition_hf_calibration.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return wellHf
    },
    wellSwit: async(idWell) => {
        const wellSwit = await db.Boundary_condition_swit_calibration.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return wellSwit
    },
    wellPwd: async(idWell) => {
        const wellPwd = await db.Boundary_condition_pwd_calibration.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return wellPwd
    },
    wellThermalCalibration: async(idWell) => {
        const wellThermalCalibration = await db.Thermal_calibration.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return wellThermalCalibration
    },

}

module.exports = calibrationQueries