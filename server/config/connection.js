// imports mongoose package
const mongoose = require('mongoose');

// connects to database using environmental variable or local connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://username:Password1@cluster0.8qhhyla.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});

module.exports = mongoose.connection;