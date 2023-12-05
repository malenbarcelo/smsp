const db = require('../../../database/models')
const sequelize = require('sequelize')

const baseDataQueries = {
    baseData: async(idWell) => {
        const baseData = await db.Base_data.findAll({
            where:{id_wells:idWell},
            include: [
                {association:'lithology'},
                {association:'pse'},
                {association:'kinetic'}
            ],
            raw:true,
            nest:true
        })
        return baseData
    },
    lithologies: async(idWell) => {
        const lithologies = await db.Lithologies.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return lithologies
    },
    pses: async(idWell) => {
        const pses = await db.Pse.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return pses
    },
    kinetics: async(idWell) => {
        const kinetics = await db.Kinetics.findAll({
            where:{id_wells:idWell},
            raw:true,
        })
        return kinetics
    },
    getPseData: async(idPse) => {
        const maxMa = await db.Base_data.findAll({
            where:{id_pse:idPse},
            attributes: [[sequelize.fn('max', sequelize.col('depo_from')),'depo_from']],
            raw:true,
        })
        const minMa = await db.Base_data.findAll({
            where:{id_pse:idPse},
            attributes: [[sequelize.fn('min', sequelize.col('depo_until')),'depo_until']],
            raw:true,
        })

        const pseData = {
            'depo_from':maxMa[0].depo_from,
            'depo_until':minMa[0].depo_until
        }
            
        return pseData
    }
}

module.exports = baseDataQueries