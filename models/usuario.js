'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Conta, {
        foreignKey: 'userId',
        as: 'usuarios'
      })
    }
  }
  Usuario.init({
    nome: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    sobrenome: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    emai: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    senha: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        len: [8, 20]
      }
    },
    salto_total: {
      type: DataTypes.DOUBLE,
      validate: {
        isNumeric: true,
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};