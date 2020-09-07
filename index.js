// const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const routes = require('./routes/users');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./doc/swagger.json');
const User = require('./models/User');
const dotenv = require('dotenv');
dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.1dazt.mongodb.net/${process.env.MONGO_COLLECTION}?retryWrites=true&w=majority`;

const port = process.env.PORT || 3001;

const app = express();


//Mongoose connection
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("Connected with MongoDB");
});

app.use(express.urlencoded({
  extended: true
}));

/*
app.use(async (req, res, next) => {
  if (req.headers["x-access-token"]) {
    try {
      const accessToken = req.headers["x-access-token"];
      const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
      // If token has expired
      if (exp < Date.now().valueOf() / 1000) {
        return res.status(401).json({
          error: "JWT token has expired, please login to obtain a new one"
        });
      }
      res.locals.loggedInUser = await User.findById(userId);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});
*/

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', routes);
// Listening to the server
app.listen(port, () => {
    console.log(`Server is listening ${port}`);
})



