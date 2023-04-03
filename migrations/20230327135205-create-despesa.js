'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Despesas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_despesa: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      tipo_despesa: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      valor_despesa: {
        type: Sequelize.DOUBLE,
        validate: {
          isNumeric: true,
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
    await queryInterface.dropTable('Despesas');
  }
};