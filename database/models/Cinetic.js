module.exports = (sequelize, DataTypes) => {

   const alias = "Cinetic"
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
      cinetic:{
         type: DataTypes.STRING,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'cinetic',
   timestamps : false
   }
   const Cinetic = sequelize.define(alias, cols, config)
   
   return Cinetic
}