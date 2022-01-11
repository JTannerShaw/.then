import React, { useEffect } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllQuestions, deleteQuestion } from "../../store/question";
import * as sessionActions from '../../store/session';

const QuestionDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const questionId = useParams();
  const { id } = questionId;
  const questions = useSelector(state => state.question.entries);
  const choice = questions.find(question => question.id === +id)

  useEffect(() => {
    dispatch(getAllQuestions())
    dispatch(sessionActions.restore())
  }, [dispatch]);

  if (!choice) {
    return (
      <h1>No Question Found</h1>
    )
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    const removed = await dispatch(deleteQuestion(choice))
    history.push('/');
  }

  return (
    <div className='question-wrapper'>
      <div className='question-container'>
        <h1>{choice?.title}</h1>
        <p>{choice?.description}</p>
        <NavLink to={`/questions/${id}/edit`}>Edit</NavLink>
        <button className="delete-button" onClick={handleDelete} type='submit'>Delete Question</button>
      </div>
    </div>
  )
}

export default QuestionDetail;
