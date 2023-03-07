const { check } = require('express-validator');
 
exports.signupValidation = [
    check('Name').not().isEmpty().withMessage('Name is required'),
    check('Email', 'Email is required').not().isEmpty(), 
    check('Email', 'Please include a valid email').isEmail(),
    check('Password', 'Password is required').not().isEmpty(),
    check('Password', 'Password must be 6 or more characters').isLength({ min: 6 }),
]


exports.loginValidation = [
    check('Email', 'Email is required').not().isEmpty(), 
    check('Email', 'Please include a valid email').isEmail(),
    check('Password', 'Password is required').not().isEmpty()
]



exports.EmailValidation = [
    check('Email', 'Email is required').not().isEmpty(), 
    check('Email', 'Please include a valid email').isEmail(),
]


exports.PasswordValidation = [
    check('Password', 'Please Enter 6 digit Password.').not().isEmpty().isLength({ min: 6 }),
]



exports.ChangePasswordValidation =[
    check('OldPassword', 'Please Enter 6 digit Old Password.').not().isEmpty().isLength({ min: 6 }),
    check('NewPassword', 'Please Enter 6 digit New Password.').not().isEmpty().isLength({ min: 6 }),
]