const { Router } = require('express');
const usercontroller = require('../controllers/userController');
const router = Router();


router.post('/', usercontroller.criarUsuario );

router.get('/', usercontroller.verTodosUsuarios);

router.get('/:id', usercontroller.verUsuarioPorId);

router.patch('/:id', usercontroller.atualizarUsuario);

router.delete('/:id', usercontroller.deletarUsuario);

router.get('/saldo/:id', usercontroller.verSaldo);

router.patch('/saldo/:id', usercontroller.atualizarSaldo);

router.post('/login', usercontroller.login);
module.exports = router;