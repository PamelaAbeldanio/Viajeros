const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
/* const { check } = require('express-validator');

const adminValidations = [
    check('userAdmin')
        .notEmpty().withMessage('Debes ingresar un nombre'),
    check('adminPassword')
        .notEmpty().withMessage('Debes ingresar una contraseña').bail()
        .isLength({min:5, max:8}),
] */


router.get('/', mainController.index);


router.get('/contact', mainController.contact);
router.get('/cart', mainController.cart);
router.get('/administrador', mainController.admin);
router.post('/administrador', mainController.adminLoginCheck);
router.get('/nosotros', mainController.nosotros);

module.exports = router;