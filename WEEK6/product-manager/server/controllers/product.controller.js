const Product = require('../models/product.model');

module.exports.findAllProduct = (req, res) => {
  Product.find()
    .then (allProduct => {res.json({product: allProduct})})
    .catch(err => {res.status(400).json({message: "Something went wrong", error: err})});
}

module.exports.findOneProduct = (req, res) => {
  Product.findOne({_id: req.params.id})
    .then (oneProduct => {res.json({product: oneProduct})})
    .catch(err => {res.status(400).json({message: "Something went wrong", error: err})});
}

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then (newProduct => {res.json({product: newProduct})})
    .catch(err => {res.status(400).json({message: "Something went wrong", error: err})});
}

module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
    .then( updateProduct => {res.json({product: updateProduct})})
    .catch(err => {res.status(400).json({message: "Something went wrong", error: err})});
}

module.exports.deleteProduct = (req, res) => {
  Product. deleteOne({_id: req.params.id})
    .then( result => {res.json({result: result})})
    .catch(err => {res.status(400).json({message: "Something went wrong", error: err})});
}
