const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const { mongoose } = require('./database');

const app = express();
app.use(bodyParser.json());

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

mongoose.connection.once('open', () => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});