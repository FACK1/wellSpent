const express = require('express');
const { brand } = require('./controllers/brand.js');

const router = express.Router();

router.get('/brand/:id', brand);
module.exports = router;
