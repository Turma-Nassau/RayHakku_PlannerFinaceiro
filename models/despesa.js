'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Despesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Despesa.belongsTo(models.Usuario, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
    }
  }
  Despesa.init({
    nome_despesa: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    tipo_despesa: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    valor_despesa: {
      type: DataTypes.DOUBLE,
      validate: {
        isNumeric: true,
      },
      allowNull: false
    },
    data_despesa: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Despesa',
  });
  return Despesa;
};