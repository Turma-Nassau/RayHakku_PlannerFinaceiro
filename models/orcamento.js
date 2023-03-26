const Sequelize = require("sequelize")

const Orcamento = Sequelize.define("orcamento", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeOrcamento: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    limiteOrcamento: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
            isNumeric: true,
            min: 1
        }
    },
    valorOrcamento: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: {
            isNumeric: true
        }
    },
    categoria: {
        type: Sequelize.STRING(15),
        allowNull: false
    }
})