const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Question, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const questions = await Question.findAll();

  res.status(200).json({ questions });
}))
