module.exports = (sequelize, DataTypes) => {

   const alias = "Boundary_condition_pwd_calibration"
   const cols = {
      id:{
         type : DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement : true,
         allowNull: false
      },
      age:{
         type: DataTypes.DECIMAL,
         allowNull: false,
      },
      pwd:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      id_wells:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'boundary_condition_pwd_calibration',
   timestamps : false
   }
   const Boundary_condition_pwd_calibration = sequelize.define(alias, cols, config)
   
   return Boundary_condition_pwd_calibration
}