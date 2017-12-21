var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcrypt-nodejs');
var Team = mongoose.model("Team");

module.exports = {
    getOneUser: function (req, res) {
        console.log('===in HomeController/ getOneUser====');
        User.findById({'_id': req.session.user}, function (errors, dbUser) {
            if (errors) {
                console.log('===in Controller/getOneUser, Error finding user===')
                return res.json(errors);
            } else {
                console.log('=====in Homecontroller/getOneUser, data retrieved====');
                res.json({
                    userKey: dbUser
                })
            }
        })
    },
}