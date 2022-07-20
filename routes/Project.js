const { Project } = require('../models');
const routes      = require('express').Router();

//GET all Projects request
routes.report('/').get((req,res)=>{
    Project.find()
        .then(project => res.json(project))
        .catch(err => res.status(400).json('Error:'+err));
});

//ADD new Project details request
routes.route('/add').post((req,res)=>{
    const project_name   = req.body.project_name; 
    const project_owner  = req.body.project_owner;
    const project_status = req.body.project_status;
    const start_date     = Date.parse(req.body.start_date);
    const end_date       = Date.parse(req.body.endt_date);
    const team_members   = req.body.team_members;

    const newProject = new Project({
        project_name,
        project_owner,
        project_status,
        start_date,end_date,
        team_members
    });

    newProject.save()
            .then(()   => res.json('Project details added!'))
            .catch(err => res.status(400).json('Error:'+err));
});

// Export the router
module.exports = routes;