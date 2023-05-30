const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');

module.exports = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];

        const decodedToken = jwt.verify(token, config.secret);

        const user = await decodedToken;

        request.user = user;
        
        next();
    }
    catch(error){
        res.status(401).json({
            error: new Error('Invalid request!'),
        })
    }
}