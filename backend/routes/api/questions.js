const express = require('express');
const asyncHandler = require('express-async-handler');

const { Question, User } = require('../../db/models');


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const questions = await Question.findAll({
    include: { model: User },
    order: [['createdAt', 'DESC']]
  });
  return res.json(questions);
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const question = await Question.findByPk(req.params.id);
  return res.json(question)
}))

router.post('/', asyncHandler(async (req, res) => {
  const { ownerId, title, description } = req.body;
  const question = await Question.create({
    ownerId,
    title,
    description
  })
  return res.status(201).json(question);
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const question = await Question.findByPk(req.params.id);
  if (question) {
    await question.destroy()
  }
  return res.json(question);
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;
  const question = await Question.findByPk(req.params.id);
  if (question) {
    await question.update({
      title,
      description
    });
    return res.json(question);
  } else {
    next();
  }
}))

module.exports = router;
