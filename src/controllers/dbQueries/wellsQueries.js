const db = require('../../../database/models')
const sequelize = require('sequelize')

const wellsQueries = {
    allWells: async() => {
        const wells = await db.Wells.findAll({
            order:['well'],
            raw:true,
        })
        return wells
    },
    wellName: async(idWell) => {
        const wellName = await db.Wells.findOne({
            where:{id:idWell},
            raw:true,
        })
        return wellName
    },
}

module.exports = wellsQueries