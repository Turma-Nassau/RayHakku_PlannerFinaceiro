'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Categoria.init({
    nome_categoria: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    tipo_categoria: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};