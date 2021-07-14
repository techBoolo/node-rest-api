const User = require('../models/user');
const { hashPassword, generateToken } = require('../helpers/auth');

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
