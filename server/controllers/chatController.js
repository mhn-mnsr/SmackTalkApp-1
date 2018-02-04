var mongoose = require("mongoose");
var User = mongoose.model("User");
var Team = mongoose.model("Team");
var Message = mongoose.model("Message");

module.exports = {
    createChat: function (req, res) {
        //console.log('Made it to Team Controller/ createTeam function');
        var newChat = new Chat({
            _user: req.body.user,
            message: req.body.message,
            _team: req.body.team
        });
        newChat.save(function (err, newChat) {
            if (err) {
                console.log(err);
                res.json({ error: "Saving error in create team" });
            } else {
                req.session.chat = newChat._id;
                console.log("In createChat/ Chat controller. New Chat id ->", newChat._id)
                //console.log('req.session.name ->', req.session.team)
                res.json({'newChat': newChat._id})
            }
        }
        )}
}