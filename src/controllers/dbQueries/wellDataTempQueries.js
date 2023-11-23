const db = require('../../../database/models')
const sequelize = require('sequelize')

const wellDataTempQueries = {
    wellDataTemp: async(idWell) => {
        const wellDataTemp = await db.Well_data_temp.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return wellDataTemp
    },
}

module.exports = wellDataTempQueries 