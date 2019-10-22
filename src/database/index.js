// Create a connectio with database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/apinode', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
mongoose.Promise = global.Promise;  

module.exports = mongoose;