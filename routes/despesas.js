const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        info: 'get Despesas OK!'
    })
})

router.get('/:id', (req, res) => {
    res.json({
        info: 'get id Despesas OK!'
    })
})

router.get('/user/:id', (req, res) => {
    res.json({
        info: 'get user id Despesas OK!'
    })
})

router.post('/', (req, res) => {
    res.json({
        info: 'post Despesas OK!'
    })
})

router.patch('/:id', (req, res) => {
    res.json({
        info: 'patch Despesas OK!'
    })
})


router.delete('/:id', (req, res) => {
    res.json({
        info: 'delete Despesas OK!'
    })
})

module.exports = router;