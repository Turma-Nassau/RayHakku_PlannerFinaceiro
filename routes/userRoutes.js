const { Router } = require('express');
const router = Router();


router.post('/users', (req, res) => res.json({
    info: 'post / create users OK!'
}))

router.get('/users', (req, res) => res.json({
    info: 'get users OK!'
}))

router.get('/users/:id', (req, res) => res.json({
    info: 'get users by id OK!'
}))

router.patch('/users/:id', (req, res) => res.json({
    info: 'patch / update users by id OK!'
}))

router.delete('/users/:id', (req, res) => res.json({
    info: 'delete users by id OK!'
}))


module.exports = router;