// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController'); // Ensure this file exists and has the necessary methods

// Define the route for admin dashboard
router.get('/dashboard', adminController.dashboard);

module.exports = router;
