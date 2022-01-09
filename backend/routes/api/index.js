const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const sessionRouter = require('./session.js')
const userRouter = require('./users.js')
const questionRouter = require('./questions.js');

router.use('/session', sessionRouter);
router.use('/users', userRouter);
// router.use('/questions', questionRouter);



module.exports = router;
