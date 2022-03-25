const express = require('express')


const api = express.Router()

api.post('/products', addProduct)

module.exports = api