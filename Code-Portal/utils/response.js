module.exports = (req, res, next) => {
  res.sendError = (err, msg = 'Internal server error', status = 500) => {
    err && console.log('[ERROR] ', err);
    console.log(msg);
    res.status(status).send({ success: false, msg });
  };
  res.sendSuccess = (data, msg, status = 200) => {
    console.log(msg);
    let user = req.user;
    if(user) {
      user.password = undefined;
      delete user.password;
    }
    res.status(status).send({ success: true, msg, ...(data && { data }), ...(user && { user }) });
  };
  next();
};
