'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      sobrenome: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      senha: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      saldo_total: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
          isNumeric: true,
          min: 0
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};