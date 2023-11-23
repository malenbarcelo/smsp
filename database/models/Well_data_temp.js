module.exports = (sequelize, DataTypes) => {

   const alias = "Well_data_temp"
   const cols = {
      id:{
         type : DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement : true,
         allowNull: false
      },
      depth:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      temperature:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      id_wells:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'well_data_temp',
   timestamps : false
   }
   const Well_data_temp = sequelize.define(alias, cols, config)
   
   return Well_data_temp
}