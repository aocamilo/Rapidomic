'use strict'

const Product = require('../models/seleccion')

function getSeleccion (req, res){
	let productId = req.params.productId

	Product.findById(productId, (err, product) => {
		if(err) return res.status(500).send({message: 'Error al realizar la peticion: '+err})
			if(!product) return res.status(404).send({message: 'El producto no existe'})

				res.status(200).send({ product })
	})
}

function getSelecciones (req, res){
	Product.find({}, (err, products) => {
		if(err) return res.status(500).send({message: 'Error al realizar la peticion: '+err})
		if(!products) return res.status(404).send({message: 'No existen servicios'})

		res.send(200, { products })
	})
}

function updateSeleccion(req, res){
	let productId = req.params.productId
	let update = req.body

	Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
		if (err) res.status(500).send({message: 'Error al borrar el producto '+err})

			res.status(200).send({product: productUpdated})
	})
}

function saveSeleccion(req, res){
	console.log('POST /api/seleccion')
	console.log(req.body)

	let product = new Product()
	product.nombre = req.body.nombre
	product.direccion = req.body.direccion
	product.descripcion = req.body.descripcion

	product.save((err, productStored) => {
		if (err) res.status(500).send({ message:'Error al salvar en la base de datos'+err})

			res.status(200).send({product: productStored})
	})
}

function deleteSeleccion(req, res){
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
	getSeleccion,
	getSelecciones,
	updateSeleccion,
	saveSeleccion,
	deleteSeleccion
}