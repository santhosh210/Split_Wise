const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    // Define other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
