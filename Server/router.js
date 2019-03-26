const express = require('express');
const { getBrand } = require('./controllers/brand.js');
const { getBrands } = require('./controllers/brands.js');
const { getAboutus } = require('./controllers/aboutus.js');

const router = express.Router();
router.get('/brand/:id', getBrand);
router.get('/brands', getBrands);
router.get('/aboutus', getAboutus);
<<<<<<< HEAD
=======

>>>>>>> 18aa698b1c350dcaca7718be66ef431ee796c10d
module.exports = router;
