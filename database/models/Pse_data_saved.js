module.exports = (sequelize, DataTypes) => {

   const alias = "Pse_data_saved"
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
      input:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      process:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      from_value:{
         type: DataTypes.DECIMAL,
         allowNull: false,
      },
      to_value:{
         type: DataTypes.DECIMAL,
         allowNull: false,
      },
      color:{
         type: DataTypes.STRING,
         allowNull: false,
      },
      from_is_invalid:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      to_is_invalid:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
   }
   const config = {
   tableName : 'pse_data_saved',
   timestamps : false
   }
   const Pse_data_saved = sequelize.define(alias, cols, config)
   
   return Pse_data_saved
}