const express = require('express');
const { getBrand } = require('./controllers/brand.js');
const { getBrands } = require('./controllers/brands.js');
const { getAboutus } = require('./controllers/aboutus.js');
const { addBrand } = require('./controllers/addBrand.js');
const { getfeedback } = require('./controllers/getfeedback.js');
const { addfeedback } = require('./controllers/addfeedback.js');
const { like } = require('./controllers/like.js');
const { dislike } = require('./controllers/dislike.js');


const router = express.Router();

router.get('/brand/:name', getBrand);
router.get('/brands', getBrands);
router.get('/aboutus', getAboutus);
router.post('/brand', addBrand);
router.get('/getfeedback/:name', getfeedback);
router.post('/addfeedback', addfeedback);
router.get('/like/:id/:like', like);
router.get('/dislike/:id/:dislike', dislike);


module.exports = router;
