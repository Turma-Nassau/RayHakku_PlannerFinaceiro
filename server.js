const express = require('express');
const app = express();


const fs = require('fs');
let PORT = 8000;
const bodyParser = require('body-parser');
const swaggerFile = require('./swagger_output.json');
const swaggerUi = require('swagger-ui-express');


const userRoutes = require('./routes/userRoutes')
const rendaRoutes = require('./routes/rendaRoutes')
const contaRoutes = require('./routes/conta')
const categoriaRoutes = require('./routes/categoria')
const despesasRoutes = require('./routes/despesas')
const objetivoRoutes = require('./routes/objetivo')
const orcamentoRoutes = require('./routes/orcamento')
const { sequelize } = require('./models')


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

    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    app.use('/api/users', userRoutes);
    app.use('/api/renda', rendaRoutes);
    app.use('/api/conta', contaRoutes);
    app.use('/api/categoria', categoriaRoutes);
    app.use('/api/despesa', despesasRoutes);
    app.use('/api/objetivo', objetivoRoutes);
    app.use('/api/orcamento', orcamentoRoutes);

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

