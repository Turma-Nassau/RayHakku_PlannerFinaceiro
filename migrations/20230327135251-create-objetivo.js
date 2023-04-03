'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Objetivos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_objetivo: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      valor_total: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
          isNumeric: true,
          min: 1
        }
      },
      valor_atual: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: {
          isNumeric: true
        },
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Usuarios',
          key: 'id',
          as: 'userId'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Objetivos');
  }
};