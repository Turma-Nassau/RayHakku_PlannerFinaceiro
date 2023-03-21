const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
var PORT = 8000;

app.use(bodyParser.json())

app.use(bodyParser, urlencoded({
    extended: true,
}))

app.get('/', (request, response) => {
    response.json({
        info: `Root OK`
    })
})

app.listen(PORT, () => {
    console.log(`Rodando na Porta ${PORT}.`)
})
