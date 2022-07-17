'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const expect        = require('chai').expect;
const cors          = require('cors');
const multer        = require('multer');
let fs              = require('fs');
let path            = require('path');
require('dotenv').config();
const conn          = require("./db-conn");
const apiRoutes     = require('./routes/api.js');
const { default: helmet } = require('helmet');
const storage = multer.diskStorage
let app = express();
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.xssFilter());
app.set('view engine', 'ejs');

//Sample front-end
app.route('/:project/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/issue.html');
  });
//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });
//Routing for API 
apiRoutes(app);
//404 Not Found Middleware
app.use(function (req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  if (process.env.NODE_ENV === 'test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch (e) {
        console.log('Tests are not valid:');
        console.error(e);
      }
    }, 3500);
  }
});

module.exports = app; 
