const sessionStore = require('../store/sessionStore');

function authMiddleware(req, res, next) {
  const { email } = req.body;

  if (sessionStore.includes(email)) {
    next(); // User is logged in
  } else {
    res.status(401).json({ message: 'You must log in first' });
  }
}

module.exports = authMiddleware;
