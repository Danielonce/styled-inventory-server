//Express config
const express = require('express')
const app = express()

//Env
require('dotenv').config()

//Cors
const cors = require('cors')

//Port config
const PORT = process.env.PORT || 4000

//JSON middleware
app.use(express.json())
app.use(cors())

//Controllers config
const getAllProducts = require('./controllers/get')
const postProduct = require('./controllers/post')
const putProduct = require('./controllers/put')
const deleteProduct = require('./controllers/delete')

//Rest routes
app.post('/createproduct', postProduct)
app.get('/products', getAllProducts)
app.put('/update', putProduct)
app.delete('/delete/:id', deleteProduct);


app.listen(PORT, () => {
    console.log(`amazing and stylish server is running on port: ${PORT}`)
})
