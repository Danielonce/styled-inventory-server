const db = require('../mysql/mysql.js')

const postProduct = (req, res) => {
    const product = req.body.product
    const quantity = req.body.quantity
    const storage = req.body.storage
    const expiration = req.body.expiration

    db.query('INSERT INTO products (product, quantity, storage, expiration) VALUES (?,?,?,?)',
    [product, quantity, storage, expiration], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send(result)
            }
        }
    )
}

module.exports = postProduct