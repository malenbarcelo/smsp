module.exports = (sequelize, DataTypes) => {

   const alias = "Kinetics"
   const cols = {
      id:{
         type : DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement : true,
         allowNull: false
      },
      id_wells:{
         type : DataTypes.INTEGER,
         allowNull: false
      },
      kinetic:{
         type: DataTypes.STRING,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'kinetics',
   timestamps : false
   }
   const Kinetic = sequelize.define(alias, cols, config)
   
   return Kinetic
}