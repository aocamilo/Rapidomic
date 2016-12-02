'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
	nombre: String,
	celular: String,
	email: String,
	password: String,
	tipo: String

})

module.exports = mongoose.model('users', ProductSchema)