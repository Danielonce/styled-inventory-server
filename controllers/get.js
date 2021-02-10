const db = require('../mysql/mysql.js')

const getAllProducts = (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
}

module.exports = getAllProducts;