const db = require('../../database/models')
const sequelize = require('sequelize')
const pseQueries = require('./dbQueries/pseQueries')

const apisController = {
  getData: async(req,res) =>{
    try{
      const idWell = req.params.idWell
      //const idUser = req.session.userLogged.id_user
      const idUser = userLogged.id_user
      
      const pseInputsData = await pseQueries.pseInputsData(idWell,idUser)

      return res.status(200).json(pseInputsData)

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  postData: async(req,res) =>{
    try{

      const idWell = req.params.idWell
      const newData = []
      //const idUser = req.session.userLogged.id_user
      const idUser = userLogged.id_user

      const pseInputsData = await pseQueries.pseInputsData(idWell,idUser)

      console.log(pseInputsData)

      req.body.forEach(element => {

        const isInvalid = pseInputsData.filter(data => data.process == element.processName)[0]
        

        newData.push({
          input: element.id,
          process: element.processName,
          from_value: element.from,
          to_value: element.to,
          color:element.color,
          from_is_invalid: isInvalid.from_is_invalid,
          to_is_invalid: isInvalid.to_is_invalid
        })
      })

      await pseQueries.pseSaveData(idWell,idUser,newData)

      const postResult = {
        'status':'Datos guardados correctamente'
      }

      return res.status(200).json(postResult)      

    }catch(error){
      console.log(error)
      return res.send('Ha ocurrido un error')
    }
  },
  
}
module.exports = apisController

