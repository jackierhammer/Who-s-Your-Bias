// imports mongoose package
const mongoose = require('mongoose');

// connects to database using environmental variable or local connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/biasDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;