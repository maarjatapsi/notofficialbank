/*const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/users', async (req,res,next)=>{
    try {
      const { name, username, password } = req.body
      const newUser = new User({ name, username, password});
      await newUser.save();

      res.status(200).json({
          code: 200,
          message: "Succesful",
          user: newUser,
      })
    } catch (error) {
      next(error)
    }
   });
   
module.exports = router*/


const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.signup);

module.exports = router;


/*
const { User, validate } = require('../models/User');
const express = require('express');
const router = express.Router();
 
router.post('/', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    // Check if this user already exisits
    let user = await User.findOne({ username: req.body.username });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        });
        await user.save();
        res.send(user);
    }
});
 
module.exports = router;
*/