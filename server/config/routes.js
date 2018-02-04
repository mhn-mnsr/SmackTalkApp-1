var mongoose = require('mongoose');
var loginController = require('../controllers/loginController.js');
var teamController = require('../controllers/teamController.js');
var homeController = require('../controllers/homeController.js');

module.exports = function (app) {

    // ROUTES//

    app.get('/', function (req, res) {
        //console.log("====In routes/made it to root get route====");
        loginController.index(req, res);
    });
    app.post('/api/registerUser', function(req, res) {
        //console.log("====In routes/made it to registerUser post route====");
        loginController.createUser(req, res);
    });
    app.get('/api/getAllUsers', function (req, res) {
        //console.log('Reached the getAllUsers route in routes.js');
        teamController.getAllUsers(req, res);
    });

    app.post('/api/loginUser', function(req, res){
        //console.log("===In routes/ made it to loginUser===");
        loginController.loginUser(req, res);
    });
    
    app.get('/api/getAllTeams', function (req, res) {
        //console.log("===In routes/ made it to getAllTeams===");
        teamController.getAllTeams(req,res);
    });
    
    app.get('/api/getOneUser', function (req, res) {
        //console.log("===In routes/ made it to getOneUser===");
        homeController.getOneUser(req,res);
    });
    
    app.post('/api/createTeam', function(req, res){
        //console.log('Made it to the createTeam route!');
        teamController.createTeam(req, res);
    })
    
    app.get('/api/getUsersTeams', function (req, res) {
        //console.log('Made it to the getUsersTeams route!');
        homeController.getUsersTeams(req, res);
    })

    app.get('/api/getUsersFirstTeamID', function (req, res) {
        //console.log('Made it to the getUsersFirstTeamID route!');
        teamController.getUsersFirstTeamID(req, res);
    })
    
    app.post('/api/joinTeam', function(req, res){
        //console.log('Made it to the joinTeam route!');
        teamController.joinTeam(req, res);
    })
    app.get('/api/displayTeam/:id', (req,res)=>{
        teamController.displayTeam(req,res)
    })
};