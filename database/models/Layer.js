module.exports = (sequelize, DataTypes) => {

   const alias = "Layers"
   const cols = {
      id:{
         type : DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement : true,
         allowNull: false
      },
      layer:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      id_layer:{
         type: DataTypes.STRING,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'layers',
   timestamps : false
   }
   const Layer = sequelize.define(alias, cols, config)
   
   return Layer
}