const Sequelize = require('sequelize');
const { sequelize } = require('../models');
const categoriaModels = require('../models/categoria')(sequelize, Sequelize.DataTypes, Sequelize.Model);

exports.verTodasCategorias = async (req, res) => {
    console.log('GET');
    await categoriaModels.findAll().then((result) => {
        res.status(200).json({
            message: "Categorias encontradas",
            categorias: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar categorias",
            error: err
        });
    })
}

exports.verCategoriasPorUsuario = async (req, res) => {
    console.log('GET');
    await categoriaModels.findAll({
        where: {
            userId: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Categorias encontradas",
            categorias: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar categorias",
            error: err
        });
    })
}

exports.verCategoriaPorId = async (req, res) => {
    console.log('GET');
    await categoriaModels.findByPk(req.params.id).then((result) => {
        res.status(200).json({
            message: "Categoria encontrada",
            categoria: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao encontrar categoria",
            error: err
        });
    })
}

exports.criarCategoria = async (req, res) => {
    console.log('POST');
    console.log(req.body);
    await categoriaModels.create({
        userId: req.body.userId,
        nome_categoria: req.body.nome,
        tipo_categoria: req.body.tipo
    }).then((result) => {
        res.status(201).json({
            message: "Categoria criada",
            categoria: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao criar categoria",
            error: err
        });
    })
}

exports.atualizarCategoria = async (req, res) => {
    console.log('PATCH');
    await categoriaModels.update({
        nome_categoria: req.body.nome,
        tipo_categoria: req.body.tipo
    }).then((result) => { 
        res.status(201).json({
            message: "Categoria atualizada",
            categoria: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao atualizar categoria",
            error: err
        });
    })
}

exports.deletarCategoria = async (req, res) => {
    console.log('DELETE');
    await categoriaModels.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.status(200).json({
            message: "Categoria deletada",
            categoria: result
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Erro ao deletar categoria",
            error: err
        });
    })
}

