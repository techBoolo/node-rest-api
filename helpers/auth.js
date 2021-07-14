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

module.exports = {
  hashPassword,
  comparePassword,
  generateToken
}
