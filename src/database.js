const mongoose = require('mongoose');

mongoose.connect('mongodb://Shantanu_bfl:Shantanu_bfl%404965*%23@10.54.160.5:27017/transactionDB?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = { mongoose };