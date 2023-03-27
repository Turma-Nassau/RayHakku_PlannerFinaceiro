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
      Conta.associate = (models) => {
        Conta.belongsTo(models.Usuario, {
          foreignKey: 'usuario_id',
          as: 'usuario',
          onDelete: 'CASCADE'
        })
      }
    }
  }
  Conta.init({
    nome_banco: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    saldo_bando: {
      type: DataTypes.DOUBLE,
      validate: {
        isNumeric: true,
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Conta',
  });
  return Conta;
};