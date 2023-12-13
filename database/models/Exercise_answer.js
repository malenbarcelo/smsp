module.exports = (sequelize, DataTypes) => {

   const alias = "Exercises_answers"
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
      exercise:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      step:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      grade:{
         type: DataTypes.DECIMAL,
         allowNull: true,
      },
      login:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      logout:{
         type: DataTypes.INTEGER,
         allowNull: true
      },
      log_time:{
         type: DataTypes.INTEGER,
         allowNull: true,
      },
      try:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      type:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      step_status:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      exercise_status:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      observations:{
         type: DataTypes.STRING,
         allowNull: true,
      }
   }
   const config = {
   tableName : 'exercises_answers',
   timestamps : false
   }
   const Exercise_answer = sequelize.define(alias, cols, config)
   
   return Exercise_answer
}