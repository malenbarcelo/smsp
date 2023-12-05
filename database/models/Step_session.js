module.exports = (sequelize, DataTypes) => {

   const alias = "Steps_sessions"
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
      step:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      login:{
         type: DataTypes.INTEGER,
         allowNull: false,
      }
   }
   const config = {
   tableName : 'steps_sessions',
   timestamps : false
   }
   const Step_session = sequelize.define(alias, cols, config)
   
   return Step_session 
}