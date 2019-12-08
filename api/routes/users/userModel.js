const bcyrpt = require('bcryptjs');
const mongoose = require('mongoose');
const { Schema } = mongoose;


// create schema,
// make sure to include an array of the associated resource
const userSchema = new Schema();

// encrypt the password before we save it to db.
userSchema.pre('save', async (next) => {

});

userSchema.methods.comparePassword = (password) => {};

exports.model = mongoose.model('User', userSchema);
