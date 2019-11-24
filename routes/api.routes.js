const router = require('express').Router();
var UserRoute = require('./../components/user/routes/user.routes');

router.use('/user', UserRoute);

module.exports = router;