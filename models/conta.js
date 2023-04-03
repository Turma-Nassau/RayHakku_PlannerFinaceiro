'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Conta.belongsTo(models.Usuario)
    }
  }
  Conta.init({
    nome_banco: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    saldo_banco: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        min: 0
      }
    },
    UsuariosId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Conta',
  });
  return Conta;
};