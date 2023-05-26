'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orcamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_orcamento: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      limite_orcamento: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
          isNumeric: true,
          min: 1
        }
      },
      valor_orcamento: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: {
          isNumeric: true
        },
        defaultValue: 0
      },
      categoria: {
        type: Sequelize.STRING(15),
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
    await queryInterface.dropTable('Orcamentos');
  }
};