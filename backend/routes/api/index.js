const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const sessionRouter = require('./session.js')
const userRouter = require('./users')

router.use('/session', sessionRouter);
router.use('/users', userRouter);



router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
})



module.exports = router;
