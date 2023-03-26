const Sequelize = require("sequelize");

const Conta = Sequelize.define("Conta", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_banco: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    saldo_banco: {
        type: Sequelize.DOUBLE,
        validate: {
            isNumeric: true,
            min: 0
        }
    }
})
