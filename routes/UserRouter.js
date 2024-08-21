// routes/userRoutes.js
const express = require('express');
const {GetProfile, GetAllUsers, UpdateProfile, Register, Login, DeleteUser} = require('../controllers/UserController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

// Public routes
router.post('/register', Register);
router.post('/login', Login);

// Protected routes
router.get('/profile', GetProfile);
router.get('/', GetAllUsers);
// router.put('/profile', authenticate, UpdateProfiledateProfile);
router.delete('/delete/:id', DeleteUser);

module.exports = router;
