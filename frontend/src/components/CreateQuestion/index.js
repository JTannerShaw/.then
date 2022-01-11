import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as questionActions from '../../store/question';


const AddQuestion = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);


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
    const userId = sessionUser.id;
    const newQuestion = {
      ownerId: userId,
      title,
      description
    }
    const question = await dispatch(questionActions.createQuestion(newQuestion))
    console.log('this is the new question!!!!!!!', question.question.id);
    history.push(`/questions/${question.question.id}`)
  }


  return (
    <div className='add-question-main'>
      <div className='form-container'>
        <form className='question-form' onSubmit={handleSubmit}>
          <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className='username-label'>
            Title
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
          <button type='submit' disabled={errors.length === 0 ? false : true}>Submit Question</button>
        </form>
      </div>
    </div>
  )
}

export default AddQuestion;
