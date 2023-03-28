const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        info: 'get orcamento OK!'
    })
})

router.get('/:id', (req, res) => {
    res.json({
        info: 'get id orcamento OK!'
    })
})

router.get('/user/:id', (req, res) => {
    res.json({
        info: 'get user id orcamento OK!'
    })
})

router.post('/', (req, res) => {
    res.json({
        info: 'post orcamento OK!'
    })
})

router.patch('/:id', (req, res) => {
    res.json({
        info: 'patch orcamento OK!'
    })
})


router.delete('/:id', (req, res) => {
    res.json({
        info: 'delete orcamento OK!'
    })
})

module.exports = router;