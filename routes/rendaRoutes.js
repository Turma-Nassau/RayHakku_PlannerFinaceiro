const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        info: 'get Renda OK!'
    })
})

router.get('/:id', (req, res) => {
    res.json({
        info: 'get id Renda OK!'
    })
})

router.get('/user/:id', (req, res) => {
    res.json({
        info: 'get user id Renda OK!'
    })
})

router.post('/', (req, res) => {
    res.json({
        info: 'post renda OK!'
    })
})

router.patch('/:id', (req, res) => {
    res.json({
        info: 'patch renda OK!'
    })
})


router.delete('/:id', (req, res) => {
    res.json({
        info: 'delete renda OK!'
    })
})

module.exports = router;