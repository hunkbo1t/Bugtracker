const routes    = require('express').Router();
const { User }  = require('../models');

//GET all Users request
routes.report('/').get((req,res)=>{
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error:'+err));
});

//ADD new User details request
routes.route('/add').post((req,res)=>{
    const username = req.body.username;
    const role = req.body.role;
    const mail = req.body.mail;

    const newUser = new User({
        username,
        role,
        mail
    });

    newUser.save()
            .then(()   => res.json('User added!'))
            .catch(err => res.status(400).json('Error:'+err));
});

// Export the router
module.exports = routes;