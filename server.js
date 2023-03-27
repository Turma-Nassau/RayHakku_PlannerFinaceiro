const express = require('express');
const app = express();
const routes = require('./routes/routes')
const bodyParser = require('body-parser');
const fs = require('fs')
const { sequelize } = require('./models')
var PORT = 8000;

app.use(logger)

const connectDB = async () => {
    console.log('Checando conexao com banco de dados');
    try {
        await sequelize.authenticate();
        console.log('Banco de dados Conectado');
    }
    catch (e) {
        console.log('Conexao falhou', e);
        process.exit(1)
    }
}

(async () => {
    await connectDB();
    app.use(bodyParser.json())

    app.use(bodyParser.urlencoded({
        extended: true,
    }))

    app.use('/api', routes);

    app.listen(PORT, () => {
        console.log(`Rodando na Porta ${PORT}.`)
    })


})()

function logger(request, response, next) {
    let log = `${new Date()}, ${request.method}, ${request.url}, ${request.body} \n`;
    fs.appendFile('./LOGGING.log', log, (err) => {
        if (err) throw err;
        console.log(log)
    })
    next()
}

