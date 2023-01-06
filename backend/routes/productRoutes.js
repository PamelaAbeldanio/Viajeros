const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController'); 




router.get("/products", productController.products);
router.get('/detalle/:id', productController.detail);


router.get('/search', productController.search)
//router.post('/searchResult', productController.searchResult)

module.exports = router;