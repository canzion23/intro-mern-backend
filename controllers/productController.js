function addProduct (req, res){
    res.status(201).send({ success: true})
}

module.exports = {
    addProduct
}