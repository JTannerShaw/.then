import React, { useEffect } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllQuestions, deleteQuestion } from "../../store/question";
import * as sessionActions from '../../store/session';
import * as answerActions from '../../store/answer';
import AddAnswerModal from '../AddAnswerModal';
import EditAnswerModal from '../EditAnswerModal';
import './QuestionDetail.css'

const QuestionDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const questionId = useParams();
  const { id } = questionId;

  const questions = useSelector(state => state.question.entries);
  const sessionUser = useSelector(state => state.session.user);
  const answers = useSelector(state => state.answer.entries);

  const choice = questions.find(question => question.id === +id)

  const questionsAnswers = answers.filter(answer => answer.questionId === +id);


  console.log(questionsAnswers)

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllQuestions())
    dispatch(sessionActions.getAllUsers())
    dispatch(answerActions.getAllAnswers())
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


  const handleAnswerDelete = async (e) => {
    e.preventDefault();
    const id = e.target.value
    await dispatch(answerActions.deleteAnswer(id))
    window.location.reload();
  }

  return (
    <div className='question-detail-container-wrapper'>
      <div className='question-detail-wrapper'>
        <div className='question-detail-container'>
          <h1 className="question-title">{choice?.title}</h1>
          <p className='the-usersname-edit'>{`Asked by ${choice?.User?.username}`}</p>
          <p className='question-description-edit'>{choice?.description}</p>
          {sessionUser?.id === choice.ownerId ? <NavLink className='edit-button' to={`/questions/${id}/edit`}>Edit</NavLink> : <></>}
          {sessionUser?.id === choice.ownerId ? <button className="delete-button" onClick={handleDelete} type='submit'>Delete Question</button> : <></>}
        </div>
      </div>
      <div className="answer-button-container">
        <AddAnswerModal />
      </div>
      <div className='answer-title'>
        <h2>Answers for {choice?.title}</h2>
      </div>
      {questionsAnswers && questionsAnswers.map((answer) => {
        return (
          <div className='answer-detail-wrapper'>
            <div className='answer-detail-container'>
              <p className=''>{answer.answer}</p>
              <p className='the-usersname-edit'>Answered by {answer?.User?.username}</p>
              {sessionUser?.id === answer.userId ? <EditAnswerModal answerId={answer.id} /> : <></>}
              {sessionUser?.id === answer.userId ? <button className="delete-button" value={answer.id} onClick={handleAnswerDelete} type='submit'>Delete Answer</button> : <></>}
            </div>
          </div>
        )
      })}
      <div className='related-questions-container'>
        <h2 className='related-questions-title'>Related Questions</h2>
        {questions && questions.map((question) => {
          return (
            <div className="other-questions-container">
              <NavLink key={question.id} className='related-question' to={`/questions/${question.id}`}>{question.title}</NavLink>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default QuestionDetail;
