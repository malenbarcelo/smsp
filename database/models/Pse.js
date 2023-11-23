module.exports = (sequelize, DataTypes) => {

   const alias = "Pse"
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
      pse:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      color:{
         type: DataTypes.STRING,
         allowNull: false,
      }
   }
   const config = {
   tableName : 'pse',
   timestamps : false
   }
   const Pse = sequelize.define(alias, cols, config)
   
   return Pse
}