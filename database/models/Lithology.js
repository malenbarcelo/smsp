module.exports = (sequelize, DataTypes) => {

   const alias = "Lithologies"
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
      lithology:{
         type: DataTypes.STRING,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'lithologies',
   timestamps : false
   }
   const Lithology = sequelize.define(alias, cols, config)
   
   return Lithology
}