const Sequelize = require("sequelize")

const Objetivo = Sequelize.define("objetivo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeObjetivo: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    valorTotal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
            isNumeric: true,
            min: 1
        }
    },
    valorAtual: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: {
            isNumeric: true
        },
        defaultValue: 0
    }
})