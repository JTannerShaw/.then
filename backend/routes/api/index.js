const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const sessionRouter = require('./session.js')
const userRouter = require('./users.js')
const questionRouter = require('./questions.js');
const answerRouter = require('./answers.js');


router.use('/session', sessionRouter);
router.use('/users', userRouter);
router.use('/questions', questionRouter);
router.use('/answers', answerRouter);


module.exports = router;
