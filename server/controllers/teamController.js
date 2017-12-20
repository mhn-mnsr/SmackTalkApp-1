var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    getAllUsers: function (req, res) {
    console.log('Reached the getAllUsers function inside controller.js');
    User.find({}, function (errors, dbUser) {
        if (errors) {
            console.log('There was an error getting the data from the database. controller.js');
            return res.json(errors);
        } else {
            console.log('returning with the db data');
            return res.json({
                userKey: dbUser
            });

        }
    });
},

}