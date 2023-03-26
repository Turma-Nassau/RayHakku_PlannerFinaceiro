const Sequelize = require("sequelize")

const Categoria = Sequelize.define("categoria", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeCategoria: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    tipoCategoria: {
        type: Sequelize.STRING(10),
        allowNull: false
    }
})