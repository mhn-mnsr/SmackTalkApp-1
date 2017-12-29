console.log('team model');
var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
var teamSession = require('express-session');
var Schema = mongoose.Schema;

var TeamSchema = new mongoose.Schema({
    teamName: {type: String, unique: true},
    description: String,
    _members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

mongoose.model('Team', TeamSchema);

var Team = mongoose.model('Team');
