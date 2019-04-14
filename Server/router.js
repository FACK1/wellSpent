const express = require('express');
const { getBrand } = require('./controllers/brand.js');
const { getBrands } = require('./controllers/brands.js');
const { getAboutus } = require('./controllers/aboutus.js');
const { addBrand } = require('./controllers/addBrand.js');
const { getfeedback } = require('./controllers/getfeedback.js');
const { addfeedback } = require('./controllers/addfeedback.js');
const { like } = require('./controllers/like.js');
const { dislike } = require('./controllers/dislike.js');
const { methodology } = require('./controllers/methodology.js');


const router = express.Router();

router.get('/api/brand/:name', getBrand);
router.get('/api/brands', getBrands);
router.get('/api/aboutus', getAboutus);
router.post('/api/brand', addBrand);
router.get('/api/getfeedback/:name', getfeedback);
router.post('/api/addfeedback', addfeedback);
router.get('/api/like/:id/:like', like);
router.get('/api/dislike/:id/:dislike', dislike);
router.get('/api/methodology', methodology);

module.exports = router;
