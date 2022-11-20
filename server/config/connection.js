// imports mongoose package
const mongoose = require('mongoose');

// connects to database using environmental variable or local connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/27017/biasDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});

module.exports = mongoose.connection;