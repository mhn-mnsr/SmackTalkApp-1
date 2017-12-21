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
                    User.findOne({'email': req.body.email }, function(err, regUser){
                        req.session.user = regUser._id;
                        console.log('this is the session id', req.session.user);
                        res.json({good: "New user created successfully"})
                    })
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
                    res.json({good: "User logged in successfully"})
                })
                .catch(function (errors, notMatched) {
                    console.log("===in controller/loginUser, something doesn't match====");
                });
            }
        });
    }
}