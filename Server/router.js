const express = require('express');
const { getBrand } = require('./controllers/brand.js');

const router = express.Router();

router.get('/brand/:name', getBrand);

module.exports = router;
