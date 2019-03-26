const express = require('express');
const { getBrand } = require('./controllers/brand.js');
const { getBrands } = require('./controllers/brands.js');
const { getAboutus } = require('./controllers/aboutus.js');

const router = express.Router();

router.get('/brand/:name', getBrand);
router.get('/brands', getBrands);
router.get('/aboutus', getAboutus);

module.exports = router;
