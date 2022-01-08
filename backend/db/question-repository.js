const { Question } = require('./models');

async function list() {
  return await Question.findAll();
}

async function oneQuestion(id) {
  return await Question.findByPk(id);
}

async function newQuestion(details) {
  return await Question.create(details);
}

async function updateQuestion(question) {
  const id = question.id;
  return await Question.update(question,
    {where: { id }})
};


module.exports = {
  list,
  oneQuestion,
  newQuestion,
  updateQuestion
}
