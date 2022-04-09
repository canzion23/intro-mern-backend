const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String
}, {
    timestamps: true
})

ProductSchema.methods.setImgUrl = function setImgUrl (filename) {
    console.log('Nombre de archivo recibido por parametro en modelo: '+ filename);
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Product', ProductSchema)
