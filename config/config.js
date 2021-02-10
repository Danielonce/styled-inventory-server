//Table config

module.exports = {

    database:{
        user: process.env.DB_USER || 'root',
        host: process.env.DB_HOST || 'localhost',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'productSystem'
    }
    
}