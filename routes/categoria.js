const { Router } = require('express');
const router = Router();
const categoriaControllers = require('../controllers/categoriaControllers');

router.get('/user/:id', categoriaControllers.verCategoriasPorUsuario);

router.get('/:id', categoriaControllers.verCategoriaPorId);

router.get('/', categoriaControllers.verTodasCategorias);

router.post('/', categoriaControllers.criarCategoria);

router.patch('/:id', categoriaControllers.atualizarCategoria);

router.delete('/:id', categoriaControllers.deletarCategoria);

module.exports = router;