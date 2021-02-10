const db = require('../mysql/mysql.js')

const deleteProduct = (req, res) => {
    const id = req.params.id
    db.query('DELETE FROM products WHERE id = ?', id, 
    (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        };
    });
}

module.exports = deleteProduct