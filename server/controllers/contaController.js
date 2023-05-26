const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const contaModel = require('../models/conta')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarConta = async (req, res) => {
    try {
        console.log('POST');
        console.log(req.body);
        const conta = await contaModel.create({
            nome_banco: req.body.nome,
            saldo_banco: req.body.saldo,
            UsuariosId: req.body.userId,
        });
        res.status(201).json({
            message: "Conta criada com sucesso!",
            conta
        });
    } catch (err) {
        res.status(500).json({
            message: "Erro ao criar conta",
            error: err
        });
    }
}

exports.verTodasContas = async (req, res) => {
    console.log('GET');
    await contaModel.findAll().then((result) => {
        res.status(200).json({
            message: "Contas encontradas com sucesso!",
            contas: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar contas",
            error: err
        });
    });
}

exports.verContaPorId = async (req, res) => {
    console.log('GET');
    await contaModel.findByPk(req.params.id).then((result) => {
        if (result == null) {
            res.status(404).json({
                message: "Conta não encontrada",
            });
            return;
        }
        res.status(200).json({
            message: "Conta encontrada com sucesso!",
            conta: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar conta",
            error: err
        });
    });
}

exports.verContasPorUsuario = async (req, res) => {
    console.log('GET');
    await contaModel.findAll({ where: { UsuariosId: req.params.id } }).then((result) => {
        if (result == null) {
            res.status(404).json({
                message: "Conta não encontrada",
            });
            return;
        }
        res.status(200).json({
            message: "Conta encontrada com sucesso!",
            conta: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar conta",
            error: err
        });
    });
}

exports.atualizarConta = async (req, res) => {
    console.log('PATCH');
    await contaModel.update({
        nome_banco: req.body.nome,
        saldo_banco: req.body.saldo,
        userId: req.body.idUsuario,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if (result == null) {
            res.status(404).json({
                message: "Conta não encontrada",
            });
            return;
        }
        res.status(200).json({
            message: "Conta atualizada com sucesso!",
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar conta",
            error: err
        });
    });
}

exports.deletarConta = async (req, res) => {
    console.log('DELETE');
    await contaModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if (result == null) {
            res.status(404).json({
                message: "Conta não encontrada",
            });
            return;
        }
        res.status(200).json({
            message: "Conta deletada com sucesso!",
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar conta",
            error: err
        });
    });
}

exports.atualizarSaldo = async (req, res) => {
    console.log('PATCH');
    await contaModel.update({
        saldo_banco: req.body.saldo,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if (result == null) {
            res.status(404).json({
                message: "Conta não encontrada",
            });
            return;
        }
        res.status(200).json({
            message: "Saldo atualizado com sucesso!",
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar saldo",
            error: err
        });
    });
}
exports.verSaldo = async (req, res) => {
    console.log('GET');
    await contaModel.findByPk(req.params.id).then((result) => {
        if (result == null) {
            res.status(404).json({
                message: "Conta não encontrada",
            });
            return;
        }
        res.status(200).json({
            message: "Saldo encontrado com sucesso!",
            saldo: result.saldo_banco
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar saldo",
            error: err
        });
    });
}
// Path: models/conta.js

