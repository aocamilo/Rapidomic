'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config= require('./config')

mongoose.connect(config.db, (err, res) =>{
	if(err){
		return console.log('Error en Conexion a la BD')
	}
	console.log('Conexion a la BD establecida...')
})

app.listen(config.port, () => {
	console.log(`API REST corriendo en http://localhost:${config.port}`)
})
