const { Router } = require('express');
const router = Router();
const rendaController = require('../controllers/rendaController');

router.get('/', rendaController.verTodasRendas);

router.get('/:id', rendaController.verRendaPorId);

router.get('/user/:id', rendaController.verRendasPorUsuario);

router.post('/', rendaController.criarRenda);

router.patch('/:id', rendaController.atualizarRenda);

router.delete('/:id', rendaController.deletarRenda);

module.exports = router;