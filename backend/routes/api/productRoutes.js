const express = require('express');
const productController = require('../../controllers/api/productController');
const router = express.Router();

router.get('/products', productController.destiny);
router.get('/products/:id', productController.destinyId);


module.exports = router;