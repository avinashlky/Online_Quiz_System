// studentRoutes.js

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route for student dashboard
router.get('/dashboard', studentController.getDashboard);

// Add other routes for students as needed
// Example:
// router.get('/questions', studentController.getQuestions);
// router.post('/submit', studentController.submitAnswers);

module.exports = router;
