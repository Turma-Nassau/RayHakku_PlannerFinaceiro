'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Renda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Renda.belongsTo(models.Usuario, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
    }
  }
  Renda.init({
    nome_renda: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    tipo_renda: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    valor_renda: {
      type: DataTypes.DOUBLE,
      validate: {
        isNumeric: true
      },
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Renda',
  });
  return Renda;
};