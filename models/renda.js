const Sequelize = require("sequelize")

const Renda = Sequelize.define("renda", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeRenda: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipoRenda: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valorRenda: {
        type: Sequelize.DOUBLE,
        validate: {
            isNumeric: true
        },
        allowNull: false
    }
})