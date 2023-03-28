const { Router } = require('express');
const router = Router();


router.post('/', (req, res) => res.json({
    info: 'post / create users OK!'
}))

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


module.exports = router;