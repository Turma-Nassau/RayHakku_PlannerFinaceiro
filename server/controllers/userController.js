const Sequelize=require('sequelize');
const { sequelize } = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userModel = require('../models/usuario')(sequelize, Sequelize.DataTypes, Sequelize.Model);
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');


exports.criarUsuario = async (req, res) => {
   console.log('POST');
    console.log(req.body);
    await userModel.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, saltRounds, function(err, hash) {
            return hash;
    })}).then((result) => {
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

exports.login = async (req, res) => {
     await userModel.findOne({
        where: {
            email: req.body.email
        }
    }).then((user =>{
        bcrypt.compare(req.body.senha, user.senha)
        .then(senhaValidar => {
            if(!senhaValidar){
                return res.status(400).send({
                    message:"Senha incorreta",
                    error
                })
            }
            const token = jwt.sign({
                userId: user.id,
                userEmail: user.email,
                userName: user.nome,
                userLastName: user.sobrenome,

            },
            config.secret,{
                expiresIn: 86400
            })
            res.status(200).send({
                message:"Login realizado com sucesso",
                id: user.id,
                email: user.email,
                nome: user.nome,
                sobrenome: user.sobrenome,
                token,
            })
        }
        )
        .catch((err) => {
            res.status(400).send({
                message:"Senha incorreta",
                err
            })
        })}))
        .catch((err) => {
        res.status(404).send({
            message:"Email não encontrado",
            err
        })
    })
}

exports.verTodosUsuarios = async (req, res) => {
    console.log('GET');
    await userModel.findAll().then((result) => {
        res.status(200).json({
            message: "Usuários encontrados com sucesso!",
            users: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar usuários",
            error: err
        });
    });
}

exports.verUsuarioPorId = async (req, res) => {
    console.log('GET');
    await userModel.findByPk(req.params.id).then((result) => {
        if(result == null){
            res.status(404).json({
                message: "Usuário não encontrado",
            });
            return;
        }
        res.status(200).json({
            message: "Usuário encontrado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar usuário",
            error: err
        });
    });
}

exports.atualizarUsuario = async (req, res) => {
    console.log('PATCH');
    await userModel.update({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        senha: req.body.senha,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if(result == 0){
            res.status(404).json({
                message: "Usuário não encontrado",
            });
            return;
        }
        res.status(200).json({
            message: "Usuário atualizado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar usuário",
            error: err
        });
    });
}

exports.deletarUsuario = async (req, res) => {
    console.log('DELETE');
    await userModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Usuário deletado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar usuário",
            error: err
        });
    });
}

exports.verSaldo = async (req, res) => {
    console.log('GET');
    await userModel.findByPk(req.params.id).then((result) => {
        if(result.saldo_total == null){
            res.status(404).json({
                message: "Sem Saldo",
            });
            return;
        }
        res.status(200).json({
            message: "Saldo encontrado com sucesso!",
            saldo: result.saldo_total
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar saldo",
            error: err
        });
    });
}

exports.atualizarSaldo = async (req, res) => {
    console.log('PATCH');
    await userModel.update({
        saldo_total: req.body.saldo,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if(result == 0){
            res.status(404).json({
                message: "Usuário não encontrado",
            });
            return;
        }
        res.status(200).json({
            message: "Saldo atualizado com sucesso!",
            user: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar saldo",
            error: err
        });
    });
}