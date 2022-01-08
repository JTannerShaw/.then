const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Question, User } = require('../../db/models');
const QuestionRepo = require('../../db/question-repository');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
  const questions = await QuestionRepo.list();
  return res.json(questions);
}))
