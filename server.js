'use strict';

const express             = require('express');
const mongoose            = require("mongoose");
const expect              = require('chai').expect;
const cors                = require('cors');
const multer              = require('multer');
let fs                    = require('fs');
let path                  = require('path');

require('dotenv').config();

const issueRoutes         = require('./routes/Issue');
const userRoutes          = require('./routes/User');
const projectRoutes       = require('./routes/Project');
const { default: helmet } = require('helmet');

const storage             = multer.diskStorage

let app = express();

app.use('/user',userRoutes);
app.use('/issue',issueRoutes);
app.use('/project',projectRoutes);
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet.xssFilter());
app.set('view engine', 'ejs');
app.use(cors());



//Start our server and log!
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

const url = process.env.ATLAS_URL;
mongoose.connect(url);
const conn = mongoose.connection;
conn.once('open', function(){
    console.log('************* MongoDB database Connected *************');
});

module.exports = app; 
