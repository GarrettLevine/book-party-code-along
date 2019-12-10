const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const { Schema } = mongoose

// create schema,
// make sure to include an array of the associated resource
const userSchema = new Schema({
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// encrypt the password before we save it to db.
userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password') || user.isNew) {
    try {
      const hash = await bcrypt.hash(user.password, 10)
      user.password = hash
      return next()
    } catch (e) {
      return next(e)
    }
  } else {
    return next()
  }
})

userSchema.method('comparePassword', function (password) {
  return bcrypt.compare(password, this.password)
})

exports.model = mongoose.model('User', userSchema)
