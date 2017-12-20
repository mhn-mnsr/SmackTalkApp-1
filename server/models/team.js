console.log('team model');
var mongoose = require("mongoose");
var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var bcrypt = require('bcrypt');
var teamSession = require('express-session');
var Schema = mongoose.Schema;

var TeamSchema = new mongoose.Schema({
    teamName: String,
    description: String,
    _members: [{ type: String, ref: 'User' }]
})

mongoose.model('Team', TeamSchema);

var Team = mongoose.model('Team');
