const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index_controller');

console.log('Index.js Controller Loaded');

// home router. for address /, home controller invoke
router.get('/', indexController.home);
router.post('/addtask', indexController.addtask);

// passing id of selected task as a parameter
router.post('/deletetask/:_id', indexController.deletetask);
module.exports = router;