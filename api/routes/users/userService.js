const { model: User } = require('./userModel')

exports.findUserById = async (id) => {
  try {
    const user = await User.findById(id)
    if (user) {
      return user
    } else {
      throw new Error('bad data')
    }
  } catch (err) {
    throw err
  }
}

exports.createUser = async (email, password) => {

}

exports.loginUser = async (email, password) => {
  try {
    const [user] = await User.find({ email })
    console.log('found user:', user)
    if (user) {
      const match = await user.comparePassword(password)
      if (match) {
        return user
      }
    }
    return null
  } catch (err) {
    throw err
  }
}
