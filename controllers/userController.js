const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
  }
  
  exports.signup = async (req, res, next) => {
    try {
      const { name, username, password } = req.body
      const hashedPassword = await hashPassword(password);
      const newUser = new User({ username, password: hashedPassword });
      const newAccount = new Account({ user: newUser._id, balance: 0 });

      await newUser.save();
      await newAccount.save();
      res.json({
          code: 200,
          message: "You have signed up successfully",
          user: newUser
      })
    } catch (error) {
      next(error)
    }
  }
