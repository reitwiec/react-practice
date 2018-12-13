require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const models = require('./models');
const redisStore = require('./config/redis')(session);
const response = require('./utils/response');

require('./config/passport')(passport);

const app = express();

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'IECSE',
  store: redisStore,
  cookie: { maxAge: 604800 }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser('IECSE'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(response);

app.use('/api',require('./routes')(passport));

const port = process.env.PORT || 3000;

models.sequelize.sync().then(
  () => {
    app.listen(port, err => {
      console.log(err || ('Listening on port ' + port));
    });
  },
  err => {
    console.log('Could not sync models: ', err);
  }
)