const models = require('../models');

const createUser = async (req, res) => {
    try {
        const usuario = await models.Usuario.create(req.body);
        return res.status(201).json({
            usuario,
        });
    } catch (e) {
        return res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    createUser,
}