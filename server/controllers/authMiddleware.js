const jwt = require('jsonwebtoken');
const config = require('../config/auth.config')
const Sequelize = require('sequelize')
const { sequelize } = require('../models')
const userModels = require('../models/usuario')(sequelize, Sequelize.DataTypes, Sequelize.Model)

verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).json({
            message: "Token não encontrado"
        });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "Não autorizado"
            });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyToken;

