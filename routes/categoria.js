const { Router } = require('express');
const router = Router();

router.get('/user/:id', (req, res) => {
    res.json({
        info: 'get categoria by user id OK!'
    })
})

router.get('/:id', (req, res) => {
    res.json({
        info: 'get categoria by id OK!'
    })
})

router.get('/', (req, res) => {
    res.json({
        info: 'get categoria OK!'
    })
})

router.post('/', (req, res) => {
    res.json({
        info: 'post categoria OK!'
    })
})

router.patch('/:id', (req, res) => {
    res.json({
        info: 'patch categoria by id OK!'
    })
})

router.delete('/:id', (req, res) => {
    res.json({
        info: 'delete categoria by id OK!'
    })
})

module.exports = router;