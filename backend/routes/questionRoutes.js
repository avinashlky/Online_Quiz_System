//this is working code 
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post('/', questionController.postQuestion);

module.exports = router;

//this is working code 
