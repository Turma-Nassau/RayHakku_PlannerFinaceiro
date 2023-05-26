const { Router } = require('express');
const router = Router();
const contaController = require('../controllers/contaController');

router.get('/user/:id', contaController.verContasPorUsuario);

router.get('/:id', contaController.verContaPorId );

router.get('/', contaController.verTodasContas);

router.get('/saldo/:id', contaController.verSaldo); 

router.post('/', contaController.criarConta);

router.patch('/:id', contaController.atualizarConta);

router.delete('/:id', contaController.deletarConta);

router.patch('/saldo/:id', contaController.atualizarSaldo)

module.exports = router;