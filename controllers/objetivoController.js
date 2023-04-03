const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const objetivoModels = require('../models/objetivo')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.verTodosObjetivos = async (req, res) => {
    console.log('GET');
    await objetivoModels.findAll().then((result) => {
        res.status(200).json({
            message: "Objetivos encontrados",
            objetivos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar objetivos",
            error: err
        });
    })
}

exports.verObjetivosPorUsuario = async (req, res) => {
    console.log('GET');
    await objetivoModels.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Objetivos encontrados",
            objetivos: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar objetivos",
            error: err
        });
    })
}

exports.verObjetivoPorId = async (req, res) => {
    console.log('GET');
    await objetivoModels.findByPk(req.params.id).then((result) => {
        res.status(200).json({
            message: "Objetivo encontrado",
            objetivo: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar objetivo",
            error: err
        });
    })
}

exports.criarObjetivo = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await objetivoModels.create({
        userId: req.body.userId,
        nome_objetivo: req.body.nome,
        valor_total: req.body.valor,
        valor_atual: req.body.valor_atual
    }).then((result) => {
        res.status(201).json({
            message: "Objetivo criado com sucesso",
            objetivo: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao criar objetivo",
            error: err
        });
    })
}

exports.atualizarObjetivo = async (req, res) => {
    console.log('PATCH');
    console.log(req.body);
    await objetivoModels.update({
        nome_objetivo: req.body.nome,
        valor_total: req.body.valor,
        valor_atual: req.body.valor_atual
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Objetivo atualizado com sucesso",
            objetivo: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar objetivo",
            error: err
        });
    })
}

exports.deletarObjetivo = async (req, res) => {
    console.log('DELETE');
    await objetivoModels.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Objetivo deletado com sucesso",
            objetivo: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar objetivo",
            error: err
        });
    })
}