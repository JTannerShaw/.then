import React, { useEffect } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllQuestions } from "../../store/question";
import * as sessionActions from '../../store/session';
import UpdateQuestionModal from "../EditQuestionModal";

const QuestionDetail = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const questionId = useParams();
  const { id } = questionId;
  const questions = useSelector(state => state.question.entries);
  const choice = questions.find(question => question.id === +id)

  useEffect(() => {
    dispatch(getAllQuestions())
    dispatch(sessionActions.restore())
  }, [dispatch]);

  // console.log('this is the question', questions[0].id);
  // console.log(id);
  // console.log('this is the choice', choice);
  if (!choice) {
    return (
      <h1>No Question Found</h1>
    )
  }

  return (
    <div className='question-wrapper'>
      <div className='question-container'>
        <h1>{choice?.title}</h1>
        <p>{choice?.description}</p>
        <UpdateQuestionModal />
      </div>
    </div>
  )
}

export default QuestionDetail;
