const mongoose = require("mongoose")

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name required"]
  },
  username: {
    type: String,
    required: [true, "Username required"]
  },
  password: {
    type: String,
    required: [true, "Password Required"]
  },
  token: {
    type: String
  }
});

module.exports = mongoose.model("User", schema)


/*
const Joi = require('joi');
const mongoose = require('mongoose');
 
const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    token: {
      type: String
    }
}));
 
function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        username: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}
 
exports.User = User;
exports.validate = validateUser;
*/