const mongoose = require('mongoose');

const userSchema = require('../schemas/userSchemas');

const User = mongoose.model('signin', userSchema);

module.exports = User;