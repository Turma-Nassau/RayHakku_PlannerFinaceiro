const { Router } = require('express');
const router = Router();
const orcamentoControllers = require('../controllers/orcamentoController');

router.get('/', orcamentoControllers.verTodosOrcamentos);

router.get('/:id', orcamentoControllers.verOrcamentoPorId);

router.get('/user/:id', orcamentoControllers.verOrcamentosPorUsuario);

router.post('/', orcamentoControllers.criarOrcamento);

router.patch('/:id', orcamentoControllers.atualizarOrcamento);

router.delete('/:id', orcamentoControllers.deletarOrcamento);

module.exports = router;