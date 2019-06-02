const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index_controller');

console.log('Index.js Controller Loaded');

router.get('/', indexController.home);
module.exports = router;