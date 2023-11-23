module.exports = (sequelize, DataTypes) => {

   const alias = "Cot"
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
      cot:{
         type: DataTypes.DECIMAL,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'cot',
   timestamps : false
   }
   const Cot = sequelize.define(alias, cols, config)
   
   return Cot
}