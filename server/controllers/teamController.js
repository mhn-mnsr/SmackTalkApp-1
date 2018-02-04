var mongoose = require("mongoose");
var User = mongoose.model("User");
var Team = mongoose.model("Team");
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    getAllUsers: function (req, res) {
        //console.log('Reached the getAllUsers function inside controller.js');
        User.find({}, function (errors, dbUser) {
            if (errors) {
                //console.log('There was an error getting the data from the database. controller.js');
                return res.json(errors);
            } else {
                //console.log('returning with the db data');
                return res.json({
                    userKey: dbUser
                });
            }
        });
    },


    getUserTeams: function (req, res) {
        //console.log('====in TeamController / getUserTeams====');
        User.find({_id: req.session.user})
        .populate('_teams')
        .exec(function(err, userResponse){
            if (err){
                return res.json({Error: "Could not find the user Session"})
            } else {
                //console.log("Getting user's teams", userResponse)
                return res.json(userResponse._teams);
            }
        });
    },

    createTeam: function (req, res) {
        //console.log('Made it to Team Controller/ createTeam function');
        var newTeam = new Team({
            teamName: req.body.teamName,
            description: req.body.description,
            _members: req.body.members
        });
        newTeam.save(function (err) {
            if (err) {
                //console.log(err);
                res.json({ error: "Saving error in create team" });
            } else {
                req.session.team = newTeam._id;
                //console.log("In createTeam/ team controller. New Team id ->", newTeam._id)
                //console.log('req.session.name ->', req.session.team)
                User.update({ _id: req.session.user },
                    {
                        $addToSet: { _teams: newTeam._id }
                    },
                    function (err, user) {
                        if (err) {
                            //console.log("Error inserting teamid into user._teams", err)
                        } else {
                            //console.log("Updated the user", user)
                            res.json({ 'newTeamIDKey' : newTeam._id});
                        }
                    });
            }
        }
        )
    },

    joinTeam: function (req, res) {
        //console.log('Made it to Team Controller/ joinTeam function');
        Team.findOneAndUpdate({ _id: req.body._id }, { $addToSet: { _members: req.session.user } }, function (err, dbTeam) {
            if (err) {
                //console.log('Something went wrong with the team joining');
            } else {
                //console.log('You have joined the team successfully!', dbTeam);

            }
        });
    },

    getUsersFirstTeamID: function (req, res) {
        //console.log('Made it to team controller/getUsersFirstTeamID function');
        let newOID = mongoose.Types.ObjectId(req.session.user)
        User.findOne({ '_id': newOID }, (errors, user) => {
            //console.log('====In teamcontrollersearching for session===', req.session.user);
            if (errors) {
                //console.log('There was an error getting the Team ID in teamcontroller.');
                res.json(errors);
            } else {
                //console.log('Returning with the Team ID:' , user);
                //console.log("!!!!!CAN U SEE ME!!!!!!!", user._teams[0])
                res.json({
                    'teamIdKey': user._teams[0].toString()
                });
            }
        });
    },
    displayTeam: (req,res)=>{
        let teamID = mongoose.Types.ObjectId(req.params.id)
        Team.findOne({'_id':teamID},(err,data)=>{
            if (err) res.json(err)
            else res.json(data)
        })
    }
}