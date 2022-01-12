import React, { useEffect } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllQuestions, deleteQuestion } from "../../store/question";
import * as sessionActions from '../../store/session';
import './QuestionDetail.css'

const QuestionDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const questionId = useParams();

  const { id } = questionId;
  const questions = useSelector(state => state.question.entries);
  const sessionUser = useSelector(state => state.session.user);
  const choice = questions.find(question => question.id === +id)

  console.log(sessionUser.id);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    await dispatch(deleteQuestion(choice))
    history.push('/');
  }

  return (
    <div className='question-detail-wrapper'>
      <div className='question-detail-container'>
        <h1>{choice?.title}</h1>
        <p>{choice?.description}</p>
        {sessionUser?.id === choice.ownerId ? <NavLink className='edit-button' to={`/questions/${id}/edit`}>Edit</NavLink> : <></>}
        {sessionUser?.id === choice.ownerId ? <button className="delete-button" onClick={handleDelete} type='submit'>Delete Question</button> : <></>}
      </div>
    </div>
  )
}

export default QuestionDetail;
