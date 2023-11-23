module.exports = (sequelize, DataTypes) => {

   const alias = "Wells"
   const cols = {
      id:{
         type : DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement : true,
         allowNull: false
      },
      well:{
         type: DataTypes.STRING,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'wells',
   timestamps : false
   }
   const Well = sequelize.define(alias, cols, config)
   
   return Well
}