import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import * as questionActions from '../../store/question';
import * as sessionActions from '../../store/session';
import './UpdateQuestion.css'

const UpdateQuestion = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const questionId = useParams();
  const { id } = questionId;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(questionActions.getAllQuestions());
    dispatch(sessionActions.restore());
  }, [dispatch])

  useEffect(() => {
    const errors = [];
    if (title.length === 0) {
      errors.push('Title is required')
    }
    if (description.length === 0) {
      errors.push('Description is required')
    }
    setErrors(errors);
  }, [title, description]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const editQuestion = {
      id,
      title,
      description
    }
    await dispatch(questionActions.updateQuestion(editQuestion));
    history.push(`/questions/${id}`)
  }


  return (
    <div className='edit-question-main'>
      <h1 className='edit-question-title'>Edit Question</h1>
      <div className='form-container'>
        <form className='question-form' onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className='username-label'>
            <input
              type='text'
              value={title}
              placeholder='Title'
              onChange={(e) => setTitle(e.target.value)}
              required />
          </label>
          <label className='description-label'>
            <textarea
              value={description}
              placeholder='Description'
              onChange={(e) => setDescription(e.target.value)}
              required />
          </label>
          <button className='edit-question-button' type='submit' disabled={errors.length === 0 ? false : true}>Submit Question</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateQuestion;
