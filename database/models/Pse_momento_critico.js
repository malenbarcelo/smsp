module.exports = (sequelize, DataTypes) => {

   const alias = "Pse_momento_critico"
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
      input_data:{
         type: DataTypes.DECIMAL,
         allowNull: true,
      },
   }
   const config = {
   tableName : 'pse_momento_critico',
   timestamps : false
   }
   const Pse_momento_critico = sequelize.define(alias, cols, config)
   
   return Pse_momento_critico
}