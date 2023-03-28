const { Router } = require('express');
const { route } = require('./userRoutes');
const router = Router();

router.get('/user/:id', (req, res) => {
    res.json({
        info: 'get contas by user id OK!'
    })
})

router.get('/:id', (req, res) => {
    res.json({
        info: 'get conta by id OK!'
    })
})

router.get('/', (req, res) => {
    res.json({
        info: 'get conta OK!'
    })
})

router.post('/', (req, res) => {
    res.json({
        info: 'post conta OK!'
    })
})

router.patch('/:id', (req, res) => {
    res.json({
        info: 'patch conta by id OK!'
    })
})

router.delete('/:id', (req, res) => {
    res.json({
        info: 'delete conta by id OK!'
    })
})

module.exports = router;