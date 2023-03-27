//require('dotenv').config()

module.exports = {
    development: {
        url: 'postgres://benggpud:lAPFH_ioTojm-PRax0yoitPFjYGd7Wnn@babar.db.elephantsql.com/benggpud',
        dialect: 'postgres',
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
}
