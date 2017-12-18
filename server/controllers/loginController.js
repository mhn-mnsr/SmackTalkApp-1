var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    index: function(req, res) {
        User.find({}, function(err, data) {
            if (err) {
                console.log('error');
                res.json(err)
            } else {
                res.json(data);
            }
        })
    },
}