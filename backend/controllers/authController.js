const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Hardcoded credentials for demo purposes
const adminCredentials = { username: 'admin', password: 'welcome123', role: 'admin' };
const studentCredentials = { username: 'student', password: 'welcome123', role: 'student' };

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Check hardcoded credentials
  let user;
  if (username === adminCredentials.username && password === adminCredentials.password) {
    user = adminCredentials;
  } else if (username === studentCredentials.username && password === studentCredentials.password) {
    user = studentCredentials;
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username, role: user.role }, 'secretKey', { expiresIn: '1h' });
  res.json({ token, role: user.role });
};
