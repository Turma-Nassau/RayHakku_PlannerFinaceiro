const Sequelize=require('sequelize');
const { sequelize } = require('../models');
const userModel = require('../models/usuario')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarUsuario =  (req, res) => {
   console.log('POST');
    console.log(req.body);
    userModel.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        senha: req.body.senha,
    }).then((result) => {
        res.status(201).json({
            message: "Usuário criado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao criar usuário",
            error: err
        });
    });
}

