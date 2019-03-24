const express = require('express');
const { getBrand } = require('./controllers/brand.js');

const router = express.Router();

router.get('/brand/:id', getBrand);
module.exports = router;
