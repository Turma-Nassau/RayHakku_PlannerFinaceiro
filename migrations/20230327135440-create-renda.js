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
      },
      userId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'Usuarios',
          key: 'id',
          as: 'userId'
        }
      },
      data_renda: {
        type: Sequelize.DATEONLY,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rendas');
  }
};