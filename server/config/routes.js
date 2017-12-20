var mongoose = require('mongoose');
var loginController = require('../controllers/loginController.js');
var teamController = require('../controllers/teamController.js');
module.exports = function (app) {

    // ROUTES//

    app.get('/', function (req, res) {
        loginController.index(req, res);
    });
    app.post('/api/registerUser', function(req, res) {
        loginController.createUser(req, res);
        console.log("====In routes/made it to registerUser post route====");
    });
    app.get('/api/getAllUsers', function (req, res) {
        console.log('Reached the getAllUsers route in routes.js');
        teamController.getAllUsers(req, res);
    });

    app.post('/api/loginUser', function(req, res){
        controller.loginUser(req, res);
        console.log("===In routes/ made it to loginUser===")
    })

};