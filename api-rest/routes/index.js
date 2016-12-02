'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const solicitudCtrl = require('../controllers/solicitud')
const seleccionCtrl = require('../controllers/seleccion')
const usersCtrl = require('../controllers/users')
const api= express.Router()

api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:productId', productCtrl.updateProduct)
api.delete('/product/:productId', productCtrl.deleteProduct)

api.get('/solicitud', solicitudCtrl.getProducts)
api.get('/solicitud/:productId', solicitudCtrl.getProduct)
api.post('/solicitud', solicitudCtrl.saveProduct)
api.put('/solicitud/:productId', solicitudCtrl.updateProduct)
api.delete('/solicitud/:productId', solicitudCtrl.deleteProduct)

api.get('/seleccion', seleccionCtrl.getSelecciones)
api.get('/seleccion/:productId', seleccionCtrl.getSeleccion)
api.post('/seleccion', seleccionCtrl.saveSeleccion)
api.put('/seleccion/:productId', seleccionCtrl.updateSeleccion)
api.delete('/seleccion/:productId', seleccionCtrl.deleteSeleccion)

api.get('/users', usersCtrl.getProducts)
api.get('/users/:productId', usersCtrl.getProduct)
api.post('/users', usersCtrl.saveProduct)
api.put('/users/:productId', usersCtrl.updateProduct)
api.delete('/users/:productId', usersCtrl.deleteProduct)


module.exports = api