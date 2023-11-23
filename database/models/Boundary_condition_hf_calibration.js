module.exports = (sequelize, DataTypes) => {

   const alias = "Boundary_condition_hf_calibration"
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
   tableName : 'boundary_condition_hf_calibration',
   timestamps : false
   }
   const Boundary_condition_hf_calibration = sequelize.define(alias, cols, config)
   
   return Boundary_condition_hf_calibration
}