const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        info: 'get objetivo OK!'
    })
})

router.get('/:id', (req, res) => {
    res.json({
        info: 'get id objetivo OK!'
    })
})

router.get('/user/:id', (req, res) => {
    res.json({
        info: 'get user id objetivo OK!'
    })
})

router.post('/', (req, res) => {
    res.json({
        info: 'post objetivo OK!'
    })
})

router.patch('/:id', (req, res) => {
    res.json({
        info: 'patch objetivo OK!'
    })
})


router.delete('/:id', (req, res) => {
    res.json({
        info: 'delete objetivo OK!'
    })
})

module.exports = router;