// const express = require('express');
// const router = express.Router();

// // Controller methods (make sure to import them)
// const studentController = require('../controllers/studentController');

// // Route for student dashboard
// router.get('/dashboard', studentController.getDashboard);

// // Other student-related routes
// // router.get('/questions', studentController.getQuestions);
// // router.post('/submit', studentController.submitAnswers);

// module.exports = router;

// // exports.getDashboard = (req, res) => {
// //     // Logic for fetching dashboard data for students
// //     res.send('Student Dashboard');  // Placeholder response
// //   };

// exports.getDashboard = (req, res) => {
//     console.log('Dashboard route hit');
//     res.send('Student Dashboard');
//   };


// studentController.js

exports.getDashboard = (req, res) => {
    console.log('Dashboard route hit');
    res.send('Student Dashboard');
};

// Other controller methods for handling student-related logic can be added here
