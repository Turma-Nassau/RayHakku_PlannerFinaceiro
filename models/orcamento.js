'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orcamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orcamento.belongsTo(models.Usuario, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
    }
  }
  Orcamento.init({
    nome_orcamento: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    limite_orcamento: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 1
      }
    },
    valor_orcamento: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      validate: {
        isNumeric: true
      },
      defaultValue: 0
    },
    categoria: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Orcamento',
  });
  return Orcamento;
};