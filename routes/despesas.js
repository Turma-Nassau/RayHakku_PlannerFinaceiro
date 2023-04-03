const { Router } = require('express');
const router = Router();
const despesasController = require('../controllers/despesasController');

router.get('/', despesasController.verTodasDespesas);

router.get('/:id', despesasController.verDespesaPorId);

router.get('/user/:id', despesasController.verDespesasPorUsuario);

router.post('/', despesasController.criarDespesa);

router.patch('/:id', despesasController.atualizarDespesa);

router.delete('/:id', despesasController.deletarDespesa);

module.exports = router;