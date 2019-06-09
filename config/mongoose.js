const mongoose = require('mongoose');

// provide a connection to todoapp development database
mongoose.connect('mongodb://localhost/todo_development');

// setting up the database
const db = mongoose.connection;

// if error while connecting, log an error message
db.on('error', console.error.bind(console, "Error connecting to todo_development database..."));

// log the message once db gets connected
db.once('open', function() {
   console.log(("Connected to todo_development database"));
});

module.exports = db;