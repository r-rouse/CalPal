// controllers/userController.js
const {user} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key';  // Use environment variables in production

// Register a new user
const GetAllUsers = async (req, res) => {
    try {
        const Users = await user.findAll();
        res.send(Users);
    } catch (error) {
        throw error
    }
}
const Register = async (req, res) => {
    const { username, password } = req.body;

    // Check if password is provided
    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }

    try {
        const existingUser = await user.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        const newUser = user.build({ username });

        // Hash the password
        newUser.password_hash = password;

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};


// Login a user
const Login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const User = await user.findOne({ where: { username } });

        if (!User) {
            console.log("invalid user")
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, User.password_hash);

        if (!isMatch) {
            console.log(password, User.password_hash)
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ userId: User.user_id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};


// Get user profile (protected route)
const GetProfile = async (req, res) => {
    const { user_id} = req.body
    try {
        const user = await user.findByPk(req.user.userId, {
            attributes: ['user_id', 'username', 'createdAt', 'updatedAt']
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Update user profile
const UpdateProfile = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findByPk(req.user.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (username) {
            user.username = username;
        }
        if (password) {
            user.password_hash = await bcrypt.hash(password, 10);
        }

        await user.save();
        res.json({ message: 'Profile updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Delete user account
const DeleteUser = async (req, res) => {
    try {
        const userId = req.params.id; // Assuming the ID is passed in the URL
        const User = await user.findByPk(userId);
        if (!User) {
            return res.status(404).json({ message: 'User not found' });
        }

        await User.destroy();
        return res.json({ message: 'User deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
};


module.exports = {
    GetProfile,
    GetAllUsers,
    Register,
    DeleteUser,
    UpdateProfile,
    Login
}