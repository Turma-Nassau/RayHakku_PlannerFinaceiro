const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const despesasModels = require('../models/despesa')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.verTodasDespesas = async (req, res) => {
    console.log('GET');
    await despesasModels.findAll().then((result) => {
        res.status(200).json({
            message: "Despesas encontradas",
            despesas: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar despesas",
            error: err
        });
    })
}

exports.verDespesasPorUsuario = async (req, res) => {
    console.log('GET');
    await despesasModels.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Despesas encontradas",
            despesas: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar despesas",
            error: err
        });
    })
}

exports.verDespesaPorId = async (req, res) => {
    console.log('GET');
    await despesasModels.findByPk(req.params.id).then((result) => {
        res.status(200).json({
            message: "Despesa encontrada",
            despesa: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar despesa",
            error: err
        });
    })
}

exports.criarDespesa = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await despesasModels.create({
        userId: req.body.userId,
        nome_despesa: req.body.nome,
        valor_despesa: req.body.valor,
        data_despesa: req.body.data,
        tipo_despesa: req.body.tipo
    }).then((result) => {
        res.status(201).json({
            message: "Despesa criada com sucesso!",
            despesa: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao criar despesa",
            error: err
        });
    })
}

exports.atualizarDespesa = async (req, res) => {
    console.log('PATCH  ');
    console.log(req.body);
    await despesasModels.update({
        nome_despesa: req.body.nome,
        valor_despesa: req.body.valor,
        data_despesa: req.body.data,
        tipo_despesa: req.body.tipo
    }, {
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Despesa atualizada com sucesso!",
            despesa: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar despesa",
            error: err
        });
    })
}

exports.deletarDespesa = async (req, res) => {
    console.log('DELETE');
    await despesasModels.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Despesa deletada com sucesso!",
            despesa: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar despesa",
            error: err
        });
    })
}

