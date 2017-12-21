var mongoose = require("mongoose");
var User = mongoose.model("User");
var Team = mongoose.model("Team");
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

    getAllTeams: function (req, res) {
        console.log('===in TeamContoller/ getAllTeams====');
        Team.find({}, function (errors, dbTeam) {
            if (errors) {
                console.log('===in Controller/getAllTeams, Error finding teams===')
                return res.json(errors);
            } else {
                console.log('=====in controller/getAllTeams, data retrieved====');
                return res.json({
                    teamKey: dbTeam
                })
            }
        })
    },

    createTeam: function (req, res) {
        console.log('Made it to Team Controller/ createTeam function');
        var newTeam = new Team({
            teamName: req.body.teamName,
            description: req.body.description,
            _members: req.body.members
        });
        newTeam.save(function (err) {
            if (err) {
                console.log(err);
                res.json({ error: "Saving error in create team" });
            } else {
                res.json({ good: "New team created successfully" });
                req.session.team = newTeam.teamName;
                console.log(req.session.team)
                User.update({ _id: req.body._id },
                    {
                        $addToSet: { _teams: newTeam._id }
                    },
                    function (err, user) {
                        if (err) {
                            console.log("Error inserting teamid into user._teams", err)
                        } else {
                            console.log("Updated the user", user)
                        }
                    });
            }
        }
        )
    },

    joinTeam: function (req, res) {
        console.log('Made it to Team Controller/ joinTeam function');
        console.log('Testing req.session.id', req.session.user);
        console.log('Testing req.body.id', req.body._id);
        Team.findOneAndUpdate({ _id: req.body._id }, { $addToSet: { _members: req.session.user } }, function (err, dbTeam) {
            if (err) {
                console.log('Something went wrong with the team joining');
            } else {
                console.log('You have joined the team successfully!', dbTeam);

            }
        })
    }
}
