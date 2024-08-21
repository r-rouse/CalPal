const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const AppRouter = require('./routes/AppRouter');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware to set various HTTP headers
app.use(helmet());

// CORS configuration to allow requests from your client
const allowedOrigins = [
  'https://wholefoodcalories.com',
  'http://localhost:3001'
];

app.use(cors({
  origin: function (origin, callback) {
    // Check if the incoming origin is in the allowedOrigins array or if there's no origin (like in some non-browser clients)
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow credentials like cookies or HTTP authentication
}));

// Body-parser middleware for handling JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing middleware
app.use('/api', AppRouter);

// Error handling middleware for unexpected errors
app.use((err, req, res, next) => {
  console.error('Error stack:', err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// Start the server and connect to the database
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    await sequelize.sync(); // Sync models with the database
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

