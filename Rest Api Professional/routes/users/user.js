// declaration
const expres = require('express')
const routes = expres.Router()
const { signupValidation} = require('../../controllers/validation.js')

// controllers
const users = require('../../controllers/users/user');
routes.post('/register-signup', signupValidation,  users.register);
routes.post('/login', users.login);
module.exports = routes