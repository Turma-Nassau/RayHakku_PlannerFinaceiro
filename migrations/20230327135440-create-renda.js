'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_renda: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      tipo_renda: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      valor_renda: {
        type: Sequelize.DOUBLE,
        validate: {
          isNumeric: true
        },
        allowNull: false
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
    await queryInterface.dropTable('Rendas');
  }
};