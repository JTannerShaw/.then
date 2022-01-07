'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    userId: {
      type: DataTypes.INTEGER,
      references: {model: 'Users'},
    },
    questionId: {
      type: DataTypes.INTEGER,
      references: {model: 'Questions'},
    },
    answer: {
      type: DataTypes.TEXT
    },
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.belongsTo(models.User, {foreignKey: 'userId'})
    Answer.belongsTo(models.Question, {foreignKey: 'questionId'})
  };
  return Answer;
};
