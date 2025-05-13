const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Public route - login
router.post('/login', authController.login);

// Protected route - dashboard
router.post('/dashboard', authMiddleware, authController.dashboard);

// Logout route
router.post('/logout', authController.logout);

module.exports = router;
