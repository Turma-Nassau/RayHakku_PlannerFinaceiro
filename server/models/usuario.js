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
      Usuario.hasMany(models.Conta,{onDelete:'CASCADE', onUpdate:'CASCADE'})
      Usuario.hasMany(models.Renda,{onDelete:'CASCADE', onUpdate:'CASCADE'})
      Usuario.hasMany(models.Orcamento,{onDelete:'CASCADE', onUpdate:'CASCADE'})
      Usuario.hasMany(models.Despesa,{onDelete:'CASCADE', onUpdate:'CASCADE'})
      Usuario.hasMany(models.Categoria,{onDelete:'CASCADE', onUpdate:'CASCADE'})
      Usuario.hasMany(models.Objetivo,{onDelete:'CASCADE', onUpdate:'CASCADE'})
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
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    saldo_total: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
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

//module.exports = Usuario;