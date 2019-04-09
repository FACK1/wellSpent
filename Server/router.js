const express = require('express');
const { getBrand } = require('./controllers/brand.js');
const { getBrands } = require('./controllers/brands.js');
const { getAboutus } = require('./controllers/aboutus.js');
const { addBrand } = require('./controllers/addBrand.js');
const { addfeedback } = require('./controllers/addfeedback.js');

const router = express.Router();

router.get('/api/brand/:name', getBrand);
router.get('/api/brands', getBrands);
router.get('/api/aboutus', getAboutus);
router.post('/api/brand', addBrand);
router.post('/api/addfeedback', addfeedback);

module.exports = router;
