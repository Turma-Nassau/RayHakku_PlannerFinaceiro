const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const rendaModel = require('../models/renda')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.criarRenda = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await rendaModel.create({
        nome_renda: req.body.nome,
        tipo_renda: req.body.tipo,
        valor_renda: req.body.valor,
        data_renda: req.body.data,
        userId: req.body.userId,
    }).then((result) => {
        res.status(201).json({
            message: "Renda criada com sucesso!",
            renda: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao criar renda",
            error: err
        });
    });
}

exports.verRendaPorId = async (req, res) => {
    console.log('GET');
    await rendaModel.findByPk(req.params.id).then((result) => {
        res.status(200).json({
            message: "Renda encontrada",
            renda: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar renda",
            error: err
        });
    });
}

exports.verRendasPorUsuario = async (req, res) => {
    console.log('GET');
    await rendaModel.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Rendas encontradas",
            rendas: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar rendas",
            error: err
        });
    });
}

exports.verTodasRendas = async (req, res) => {
    console.log('GET');
    await rendaModel.findAll().then((result) => {
        res.status(200).json({
            message: "Rendas encontradas",
            rendas: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar rendas",
            error: err
        });
    });
}

exports.atualizarRenda = async (req, res) => {
    console.log('PATCH');
    await rendaModel.update({
        nome_renda: req.body.nome,
        tipo_renda: req.body.tipo,
        valor_renda: req.body.valor,
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Renda atualizada",
            renda: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar renda",
            error: err
        });
    });
}

exports.deletarRenda = async (req, res) => {
    console.log('DELETE');
    await rendaModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Renda deletada",
            renda: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar renda",
            error: err
        });
    });
}