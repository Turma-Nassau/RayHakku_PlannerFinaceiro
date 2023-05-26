const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const orcamentoModels = require('../models/orcamento')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.verTodosOrcamentos = async (req, res) => {
    console.log('GET');
    await orcamentoModels.findAll().then((result) => {
        res.status(200).json({
            message: "Orcamentos encontrados",
            orcamentos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar orcamentos",
            error: err
        });
    })
}

exports.verOrcamentosPorUsuario = async (req, res) => {
    console.log('GET');
    await orcamentoModels.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Orcamentos encontrados",
            orcamentos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar orcamentos",
            error: err
        });
    })
}

exports.verOrcamentoPorId = async (req, res) => {
    console.log('GET');
    await orcamentoModels.findByPk(req.params.id).then((result) => {
        res.status(200).json({
            message: "Orcamento encontrado",
            orcamento: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar orcamento",
            error: err
        });
    })
}

exports.criarOrcamento = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await orcamentoModels.create({
        userId: req.body.userId,
        nome_orcamento: req.body.nome,
        valor_orcamento: req.body.valor,
        limite_orcamento: req.body.limite,
        categoria: req.body.categoria
    }).then((result) => {
        res.status(201).json({
            message: "Orcamento criado",
            orcamento: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao criar orcamento",
            error: err
        });
    })
}

exports.atualizarOrcamento = async (req, res) => {
    console.log('PATCH');
    await orcamentoModels.update({
        nome_orcamento: req.body.nome,
        valor_orcamento: req.body.valor,
        limite_orcamento: req.body.limite,
        categoria: req.body.categoria
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Orcamento atualizado",
            orcamento: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar orcamento",
            error: err
        });
    })
}

exports.deletarOrcamento = async (req, res) => {
    console.log('DELETE');
    await orcamentoModels.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Orcamento deletado",
            orcamento: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar orcamento",
            error: err
        });
    })
}