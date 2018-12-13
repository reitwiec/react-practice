const express = require('express');
const router = express.Router();

const validator = require('../utils/validator');
const schemas = require('../schemas');

module.exports = (passport)=>{
  const auth = require('./auth')(passport);

  //auth routes
  router.post('/register',
  validator(schemas.auth.register),
  auth.register
  );
  router.post('/login',
  validator(schemas.auth.login),
  auth.login
  );

  return router;
}