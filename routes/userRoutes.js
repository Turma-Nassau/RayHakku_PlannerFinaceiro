const { Router } = require('express');
const usercontroller = require('../controllers/userController');
const router = Router();


router.post('/', );

router.get('/', (req, res) => res.json({
    info: 'get users OK!'
}))

router.get('/:id', (req, res) => res.json({
    info: 'get users by id OK!'
}))

router.patch('/:id', (req, res) => res.json({
    info: 'patch / update users by id OK!'
}))

router.delete('/:id', (req, res) => res.json({
    info: 'delete users by id OK!'
}))

router.get('/saldo/:id', (req, res) => {
    res.json({
        info: 'get saldo by user OK!'
    })
})

router.patch('/saldo/:id', (req, res) => {
    res.json({
        info: 'patch / update saldo by user OK!'
    })
})

module.exports = router;