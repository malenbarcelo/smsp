module.exports = (sequelize, DataTypes) => {

   const alias = "Boundary_condition_swit"
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
      swit:{
         type: DataTypes.DECIMAL,
         allowNull: false,
      },
      id_wells:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'boundary_condition_swit',
   timestamps : false
   }
   const Boundary_condition_swit = sequelize.define(alias, cols, config)
   
   return Boundary_condition_swit
}