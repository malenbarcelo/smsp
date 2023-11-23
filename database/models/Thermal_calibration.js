module.exports = (sequelize, DataTypes) => {

   const alias = "Thermal_calibration"
   const cols = {
      id:{
         type : DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement : true,
         allowNull: false
      },
      age:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      hf:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      id_wells:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'thermal_calibration',
   timestamps : false
   }
   const Thermal_calibration = sequelize.define(alias, cols, config)
   
   return Thermal_calibration
}