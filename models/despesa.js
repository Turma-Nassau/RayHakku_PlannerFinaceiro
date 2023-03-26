const Sequelize = require("sequelize")

const Despesa = Sequelize.define("despesa", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeDepesas: {
        type: Sequelize.STRING(15),
        allowNull: false,
    },
    tipoDespesas: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    valorDespesas: {
        type: Sequelize.DOUBLE,
        validate: {
            isNumeric: true,
        },
        allowNull: false
    }
})