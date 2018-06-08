const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

// Define userSchema
const userDataSchema = new Schema({
  name: { type: String, unique: false, required: false },
  occupation: { type: String, unique: false, required: false },
  experience: { type: String, unique: false, required: false },
  description: { type: String, unique: false, required: false }
});


const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
