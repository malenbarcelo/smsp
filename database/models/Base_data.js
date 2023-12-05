module.exports = (sequelize, DataTypes) => {

   const alias = "Base_data"
   const cols = {
      id:{
         type : DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement : true,
         allowNull: false
      },
      layer:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      id_layer:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      top:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      base:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      thickness:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      depo_from:{
         type: DataTypes.DECIMAL,
         allowNull: false,
      },
      depo_until:{
         type: DataTypes.DECIMAL,
         allowNull: false,
      },
      id_lithologies:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      id_pse:{
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      cot:{
         type: DataTypes.DECIMAL,
         allowNull: true,
      },
      id_kinetics:{
         type: DataTypes.INTEGER,
         allowNull: true,
      },
      hi:{
         type: DataTypes.DECIMAL,
         allowNull: true,
      },
      id_wells:{
         type: DataTypes.INTEGER,
         allowNull: false,
      }
   }
   const config = {
   tableName : 'base_data',
   timestamps : false
   }
   const Base_data = sequelize.define(alias, cols, config)

   Base_data.associate = (models) => {
      Base_data.belongsTo(models.Wells,{
         as:'well',
         foreignKey: 'id_wells'
      }),
      Base_data.belongsTo(models.Lithologies,{
         as:'lithology',
         foreignKey: 'id_lithologies'
      }),
      Base_data.belongsTo(models.Pse,{
         as:'pse',
         foreignKey: 'id_pse'
      }),
      Base_data.belongsTo(models.Kinetics,{
         as:'kinetic',
         foreignKey: 'id_kinetics'
      })
      
    }
   
   return Base_data
}