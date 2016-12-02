'use strict'

const Product = require('../models/users')

function getProduct (req, res){
	let productId = req.params.productId

	Product.findById(productId, (err, product) => {
		if(err) return res.status(500).send({message: 'Error al realizar la peticion: '+err})
			if(!product) return res.status(404).send({message: 'El producto no existe'})

				res.status(200).send({ product })
	})
}

function getProducts (req, res){
	Product.find({}, (err, products) => {
		if(err) return res.status(500).send({message: 'Error al realizar la peticion: '+err})
		if(!products) return res.status(404).send({message: 'No existen productos'})

		res.send(200, { products })
	})
}

function updateProduct(req, res){
	let productId = req.params.productId
	let update = req.body

	Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
		if (err) res.status(500).send({message: 'Error al borrar el producto '+err})

			res.status(200).send({product: productUpdated})
	})
}

function saveProduct(req, res){
	console.log('POST /api/users')
	console.log(req.body)

	let product = new Product()
	product.nombre = req.body.nombre
	product.celular = req.body.celular
	product.password = req.body.password
	product.email = req.body.email
	product.tipo= req.body.tipo

	product.save((err, productStored) => {
		if (err) res.status(500).send({ message:'Error al salvar en la base de datos'+err})

			res.status(200).send({product: productStored})
	})
}

function deleteProduct(req, res){
	let productId = req.params.productId

	Product.findById(productId, (err, product) => {
		if (err) res.status(500).send({message: 'Error al borrar el producto '+err})

		product.remove(err => {
			if (err) res.status(500).send({message: 'Error al borrar el producto '+err})
			res.status(200).send({message: 'El producto ha sido eliminado'})
				
		})	
	})
}

module.exports = {
	getProduct,
	getProducts,
	updateProduct,
	saveProduct,
	deleteProduct
}