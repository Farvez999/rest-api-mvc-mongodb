require('dotenv').config();

const dev = {
    app: {
        port: process.env.PORT || 5000
    }, db: {
        url: process.env.DB_URL || 'http://localhost:27017/restApiMVC'
    }

}

module.exports = dev