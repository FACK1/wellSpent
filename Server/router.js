const express = require('express');
const { getBrand } = require('./controllers/brand.js');
const { getBrands } = require('./controllers/brands.js');

const router = express.Router();
router.get('/brand/:id', getBrand);
router.get('/brands', getBrands);
module.exports = router;
