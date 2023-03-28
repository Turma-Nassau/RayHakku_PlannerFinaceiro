const usuario = require('../models').usuario;

exports.criarUsuario = async (req, res) => {

    console.log(req.body);
    await usuario.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        emai: req.body.email,
        senha: req.body.senha
    }).then(usuario => {
        res.status(201).json({
            usuario,
        });
    }).catch(err => {
        res.status(404).send("Error -> " + err);
    })
}

