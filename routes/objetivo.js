const { Router } = require('express');
const router = Router();
const controller = require('../controllers/objetivoController');

router.get('/', controller.verTodosObjetivos);

router.get('/:id', controller.verObjetivoPorId);

router.get('/user/:id', controller.verObjetivosPorUsuario);

router.post('/', controller.criarObjetivo);

router.patch('/:id', controller.atualizarObjetivo);

router.delete('/:id', controller.deletarObjetivo);

module.exports = router;