'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
	nombre: String,
	direccion: String,
	descripcion: String

})

module.exports = mongoose.model('seleccion', ProductSchema)