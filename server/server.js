const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
var compression = require('compression');
var helmet = require('helmet');
var app = express();
const APP_PORT = 3000;
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(helmet());
app.use(compression());

// Serve the static files from the build folder
app.use(express.static( __dirname + "/build"));

// Redirect all traffic to the index
app.get("*", function(req, res){
  res.sendFile(__dirname + "/build/index.html");
});
// Listen to port 3000
app.listen(process.env.PORT || 3000);

/*
app.get('/sayHello', function(req, res){
  res.send('Hello from the back-end.');
});

app.listen(APP_PORT);
*/
