// middleware/authMiddleware.js
// const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_secret_key';  // Use environment variables in production

const authenticate = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authenticate;
