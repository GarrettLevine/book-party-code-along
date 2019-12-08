const jwt = require('jsonwebtoken');
const SECRET = process.env.BOOK_CLUB_APP_SECRET || 'a v.good secret 🔮';

exports.issueToken = (user) => {
  const { _id: id } = user;

  const payload = {
    user: { id },
  };

  return jwt.sign(payload, SECRET);
};

exports.verify = (token) => jwt.verify(token, SECRET);