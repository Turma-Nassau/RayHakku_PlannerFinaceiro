'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objetivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Objetivo.init({
    nome_objetivo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    valor_total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 1
      }
    },
    valor_atual: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      validate: {
        isNumeric: true
      },
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Objetivo',
  });
  return Objetivo;
};