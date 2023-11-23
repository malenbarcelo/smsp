module.exports = (sequelize, DataTypes) => {

   const alias = "Hi"
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
      hi:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'hi',
   timestamps : false
   }
   const Hi = sequelize.define(alias, cols, config)
   
   return Hi
}