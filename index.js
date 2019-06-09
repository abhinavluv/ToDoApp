// acquire express
const express = require('express');

// initialize express for the app
const app = express();

// define port on which the application needs to run
const port = 9000;

const db = require('./config/mongoose');

// reading through the post request
app.use(express.urlencoded());

// use routes from routes/index.js
app.use('/', require('./routes'));

// setup views and view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// use css file

app.use(express.static('./assets'));
// console.log(path.join(__dirname, 'public'));

// listen to the server on the port
app.listen(port, function(error) {
   if(error) {
       console.log("Unable to connect to the server...");
       // interpolation, in case of error, print the error message
       console.log(`Error: ${ error }`);
   }
    // if runs perfectly, console log success
    console.log(`Server is running on port: ${ port }`);
});

