const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = async (password) => {
  return await bcrypt.hash(password, +process.env.saltRounds);
}
const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash) 
}

const generateToken = async (payload) => {
  return await jwt.sign(
      payload, 
      process.env.JWT_KEY,
      {
        expiresIn: '1h'
      }
    )
}

const verifyToken = async (token) => {
  return await jwt.verify(token, process.env.JWT_KEY)
}

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
}
