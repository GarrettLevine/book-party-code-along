'use strict'

const tokenService = require('../tokens/tokenService')
const { JsonWebTokenError } = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const authHeader = req.get('Authorization')

  if (!authHeader) {
    next(new Error('not authorized'))
  } else {
    try {
      /* eslint-disable-next-line */
      const [prefix, token] = authHeader.split(' ');
      if (prefix === 'Bearer' && token) {
        const decoded = await tokenService.verify(token)

        if (decoded) {
          req.token = decoded
          return next()
        }
      }
      next(new Error('invalid token'))
    } catch (e) {
      if (e instanceof JsonWebTokenError) {
        next(new Error(e.message))
      } else {
        next(e)
      }
    }
  }
}
