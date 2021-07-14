const User = require('../models/user');
const { hashPassword, generateToken, comparePassword } = require('../helpers/auth');
const { NoEntryFound } = require('../helpers/errorExceptions');

exports.create = async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: await hashPassword(req.body.password)
    })

    const result = await user.save()
    const payload = {
      email: result.email,
      id: result._id
    }

    const token = await generateToken(payload);

    res.status(201).json({ 
      message: 'user created',
      result: payload,
      token
    }) 
  } catch (error) {
    next(error)
  }
}
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if(user) {
      const compareResult = await comparePassword(req.body.password, user.password);
      if(compareResult){
        const payload = {
          email: user.email,
          id: user._id
        }
        const token = await generateToken(payload);
        res.status(200).json({
          message: "Authenticated successfully",
          result: payload,
          token
        }); 
      } else {
        const error = new NoEntryFound("Authentication failed")
        error.status = 404;
        throw error;
      }
    } else {
      const error = new NoEntryFound("Authentication failed")
      error.status = 404;
      throw error;
    }
  } catch (error) {
    next(error)
  }
}
