// declaration
const expres = require('express')
const routes = expres.Router()
var checkAuth = require('../../controllers/middlewear/auth.js');

// controllers
const product = require('../../controllers/product/product');
routes.post('/add_product', checkAuth, product.AddProduct )
module.exports = routes