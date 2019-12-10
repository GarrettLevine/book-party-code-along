const express = require('express')
const router = express.Router()

const userService = require('./userService')
const tokenService = require('../../tokens/tokenService')
const requiresAuth = require('../../middleware/auth')

router.get('/', async (req, res, next) => {})

router.get('/me', requiresAuth, async (req, res, next) => {
  try {
    const { user: { id: userId } } = req.token
    const user = await userService.findUserById(userId)
    res.status(200).json({ data: [user] })
  } catch (err) {
    next(err)
  }
})

// Create new user
router.post('/', async (req, res, next) => {})

// Login user
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await userService.loginUser(email, password)
    if (user) {
      const token = await tokenService.issueToken(user)
      res.status(200).json({ data: [{ token }] })
    } else {
      res.status(401).json({ data: [] })
    }
  } catch (err) {
    next(err)
  }
})

module.exports.router = router
