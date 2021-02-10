const db = require('../mysql/mysql.js')

const putProduct = (req, res) => {

    
    const id = req.body.id
    const quantity = req.body.quantity
    const storage = req.body.storage
    const expiration = req.body.expiration


    /* Expiration and Storage are both required, but only if we want to modify
    any date. Otherwise, we always require quantity */


    if (expiration === '' && storage === ''){
    db.query('UPDATE products SET quantity = ? WHERE id = ?', [quantity, id],
    (err, result) => {
        
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    }



    )} else {
        db.query('UPDATE products SET quantity = ?, storage = ?, expiration = ? WHERE id = ?', [quantity, storage, expiration, id],
    (err, result) => {

                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            }

        )
    }
}

module.exports = putProduct