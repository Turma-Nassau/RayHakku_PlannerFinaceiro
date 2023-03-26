const Sequelize = require("sequelize")

const Usuario = Sequelize.define("usuario", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    senha: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
            len: [8, 20]
        }
    },
    saldo_total: {
        type: Sequelize.DOUBLE,
        validate: {
            isNumeric: true,
            min: 0
        }
    }
})

