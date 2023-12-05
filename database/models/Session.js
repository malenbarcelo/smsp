module.exports = (sequelize, DataTypes) => {

   const alias = "Sessions"
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
      id_users:{
         type : DataTypes.INTEGER,
         allowNull: false
      },
      id_exercises:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      login:{
         type: DataTypes.INTEGER,
         allowNull: false,
      }
   }
   const config = {
   tableName : 'sessions',
   timestamps : false
   }
   const Session = sequelize.define(alias, cols, config)
   
   return Session
}