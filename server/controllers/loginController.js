var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcrypt');
// var oldbcrypt = require('bcrypt-nodejs');


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

    createUser: function(req, res) {
        console.log("===In controller, createUser function====")
        var regUser = new User
        ({
            username: req.body.username,
            email: req.body.email,
            // Below 2 lines to be used in userProfile function
            // firstName: req.body.firstName
            // bio: req.body.bio
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        });
        if(req.body.password == req.body.confirmPassword){
            console.log("===In controller, createUser function, confirmpassword check====")
            console.log(regUser);
            console.log(req.body);
            regUser.save(function (err){
                console.log(err);
                if(err){
                    console.log(err);
                    res.json({error: "Saving error in create user"});
                } else {
                    res.json({good: "New user created successfully"})
                    req.session.user = regUser._id;
                }
            })
        }
    },

    loginUser: function(req, res) {
        console.log("=====In controller, loginUser function====")
        console.log(req.body.email)
        User.findOne({'email': req.body.email }, function(err, regUser){
            if (regUser != null){
                console.log("====In controller, loginUser function, after if regUser != null======")
                console.log(regUser);
                console.log(req.body.password);
                bcrypt.compare(req.body.password, regUser.password)
                .then(function (matchedPassword) {
                    console.log("====in controller/loginUser, passwords match====");
                    req.session.user = regUser._id;
                    res.json({good: "New user created successfully"})
                })
                .catch(function (errors, notMatched) {
                    console.log("===in contoller/loginUser, emails dont match====");
                })
            }
        })
    }
}