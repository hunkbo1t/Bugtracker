'use strict';
const mongoose = require('mongoose');
let mongodb = require('mongodb');
const IssueModel = require('../models').Issue;
const ProjectModel = require('../models').Project;


module.exports = function (app) {

  app.route('/api/issues/:project')

    .get(function (req, res) {
      let project = req.params.project;

    })

    .post(function (req, res) {
      let project = req.params.project;

    })

    .put(function (req, res) {
      let project = req.params.project;

    })

    .delete(function (req, res) {
      let project = req.params.project;

    });

};

// //Sample front-end
// app.route('/:project/')
//   .get(function (req, res) {
//     res.sendFile(process.cwd() + '/views/issue.html');
//   });
// //Index page (static HTML)
// app.route('/')
//   .get(function (req, res) {
//     res.sendFile(process.cwd() + '/views/index.html');
//   });
// //Routing for API 
// apiRoutes(app);
// //404 Not Found Middleware
// app.use(function (req, res, next) {
//   res.status(404)
//     .type('text')
//     .send('Not Found');
// });