// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AppRouter = require('./routes/AppRouter');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: 'https://wholefoodcalories.com/',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', AppRouter);

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    await sequelize.sync(); // This will sync the models with the database
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
