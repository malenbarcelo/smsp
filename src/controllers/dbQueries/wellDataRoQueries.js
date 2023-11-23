const db = require('../../../database/models')
const sequelize = require('sequelize')

const wellDataRoQueries = {
    wellDataRo: async(idWell) => {
        const wellDataRo = await db.Well_data_ro.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return wellDataRo
    },
}

module.exports = wellDataRoQueries 