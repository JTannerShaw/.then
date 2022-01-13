'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: 'Users'}
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.belongsTo(models.User, {foreignKey: 'ownerId'})
    Question.hasMany(models.Answer, {foreignKey: 'questionId', onDelete: 'CASCADE', hooks: true})
  };
  return Question;
};
