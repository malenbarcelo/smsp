const db = require('../../../database/models')
const sequelize = require('sequelize')
const pseTablesData = require('../data/pseTablesData')

const pseQueries = {
    pse: async(idPse) => {
        const pse = await db.Pse.findOne({
            where:{id:idPse},
            raw:true,
        })
        return pse
    },
    pseInputsData: async(idWell,idUser) => {
        const pseInputsData = await db.Pse_data_saved.findAll({
            where:{
                id_wells:idWell,
                id_users:idUser
            },
            order:[['input','ASC']],
            raw:true,
        })
        return pseInputsData
    },
    pseSaveData: async(idWell,idUser,newData) => {
        
        for (let i = 0; i < newData.length; i++) {
            await db.Pse_data_saved.update(
                {
                    from_value:newData[i].from_value,
                    to_value:newData[i].to_value,
                    process:newData[i].process,
                    color:newData[i].color,
                    from_is_invalid:newData[i].from_is_invalid,
                    to_is_invalid:newData[i].to_is_invalid
                },
                {
                    where:{
                        id_wells:idWell,
                        input: newData[i].input,
                        id_users: idUser
                    }
                }
        )}
    },
    restablishData: async(idUser,idWell) => {
        
        //destroy data if exists
        await db.Pse_data_saved.destroy({
            where:{
                id_wells:idWell,
                id_users:idUser
            }
        })
        
        //create new data
        const inputsData = pseTablesData.filter(pseData => pseData.idWell == idWell)[0].inputsData

        for (let i = 0; i < inputsData.length; i++) {
            await db.Pse_data_saved.create({
                id_wells: idWell,
                id_users: idUser,
                input: inputsData[i].input,
                process:inputsData[i].process,
                color:inputsData[i].color,
                from_value: inputsData[i].from_value,
                to_value: inputsData[i].to_value,
                from_is_invalid:inputsData[i].from_is_invalid,
                to_is_invalid:inputsData[i].to_is_invalid
            })
            
        }
        
    }
}

module.exports = pseQueries