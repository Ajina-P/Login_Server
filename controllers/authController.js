const users = require('../models/users');
const sessionStore = require('../store/sessionStore');

const login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    if (!sessionStore.includes(email)) {
      sessionStore.push(email); // Simulate login session
    }
    res.json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};



const dashboard = (req, res) => {
  res.json({ message: `Welcome to your dashboard, ${req.body.email}` });
};

const logout = (req, res) => {
  const { email } = req.body;
  const index = sessionStore.indexOf(email);

  if (index !== -1) {
    sessionStore.splice(index, 1); // Remove user from session
    res.json({ message: 'Logged out successfully' });
  } else {
    res.status(400).json({ message: 'User not logged in' });
  }
};

module.exports = {
  login,
  dashboard,
  logout
};
