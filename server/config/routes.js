var mongoose = require('mongoose');
var controller = require('../controllers/loginController.js');
module.exports = function (app) {

    // ROUTES//

    app.get('/', function (req, res) {
        controller.index(req, res);
    });
    app.post('/api/registerUser', function(req, res) {
        controller.createUser(req, res);
        console.log("====In routes/made it to registerUser post route====")
    });

};