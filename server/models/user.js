console.log('users model');
var mongoose = require("mongoose");
var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var bcrypt = require('bcrypt-nodejs');
var user = require('express-session');


var UserSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: [true, 'email cannot be blank'],
        unique: true,
        validate:[{
            validator: function(email) {
              // email regex
              return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(email);
            },
            message: '{VALUE} is not a valid email'
        }]
    },
    firstName: {
        type: String,
        // required: [true, 'First name cannot be blank']
    },
    lastName: {
        type: String,
        // required: [true, 'Last name cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    },
    confirmPassword: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        // required: [true, 'bio cannot be blank']
    }

  }, {timestamps: true});

  //hashes my password
UserSchema.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

UserSchema.methods.validatePassword = function(input) {
    return bcrypt.compareSync(input, this.password);
}

UserSchema.pre('save', function(done) {
    this.password = this.hashPassword(this.password);
    done();
});


mongoose.model("User", UserSchema);
var mongoose = require('mongoose');
var User = mongoose.model('User');
