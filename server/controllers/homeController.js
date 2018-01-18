var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require('bcrypt-nodejs');
var Team = mongoose.model("Team");
var Message = mongoose.model("Message");

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

    getUsersTeams: function (req, res) {
        console.log('===in HomeController/ getusersteams====');
        Team.find({'_members': req.session.user }, function (errors, dbTeam) {
            if (errors) {
                console.log('===in Controller/getUsersTeams, Error finding teams===')
            } else {
                console.log('====in controller getusersteams/ no errors===');
                console.log(dbTeam)
                res.json({
                    teamKey: dbTeam
                })
            }
        })
    },

    createMessage: function(req,res) {
        console.log('======in controller/createMessage=====');
        var newMessage = new Message
        ({
            message: req.body.message,
            _user: req.session.user,
            _team: req.session.team
        })
        newMessage.save(function (err) {
            console.log(err);
            if (err){
                res.json({error: "Saving error in message"});
            } else {
            Message.findOne({'message': req.body.message}, function(err, newMessage) {
                req.session.message = newMessage._id;
                res.json({good: "New message created successfully"})
            })
            Team.findOne({'_id': req.session.team}, function (errors, dbTeam){
                if (errors) {
                    console.log("===in Controller/createMessage, Error finding teams===")
                    res.json({
                        teamID : dbTeam
                    })
                }
            })
            }
        })
    }
}