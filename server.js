const express = require('express')
const app = express()
const bp = require('body-parser')
const PORT = 8000

app.get('/', (req, res) => {
    res.json({ info: 'Servidor OK' })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})