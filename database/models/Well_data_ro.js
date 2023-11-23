module.exports = (sequelize, DataTypes) => {

   const alias = "Well_data_ro"
   const cols = {
      id:{
         type : DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement : true,
         allowNull: false
      },
      depth:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      ro_min:{
         type: DataTypes.DECIMAL,
         allowNull: false,
      },
      ro:{
         type: DataTypes.DECIMAL,
         allowNull: true,
      },
      ro_max:{
         type: DataTypes.DECIMAL,
         allowNull: true,
      },
      id_wells:{
         type: DataTypes.INTEGER,
         allowNull: true,
      },

   }
   const config = {
   tableName : 'well_data_ro',
   timestamps : false
   }
   const Well_data_ro = sequelize.define(alias, cols, config)
   
   return Well_data_ro
}