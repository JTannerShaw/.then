import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as answerActions from '../../store/answer';
import './EditAnswer.css'

const EditAnswer = ({ setShowModal, answerId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const questionId = useParams();
  const { id } = questionId;
  const [answer, setAnswer] = useState('');
  const [value, setValue] = useState();
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (answer.length === 0) {
      errors.push('Answer is required')
    }
    setErrors(errors);
  }, [answer, value]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editAnswer = {
      id: answerId,
      answer
    }
    await dispatch(answerActions.updateAnswer(editAnswer))
    setShowModal(false);
    setValue({})
    history.push(`/questions/${id}`)
    // window.location.reload();
  }

  return (
    <div className='add-question-main'>
      <div className='form-container'>
        <form className='question-form' onSubmit={handleSubmit}>
          <h1>Editing Answer</h1>
          <ul>
          {errors.map((error, idx) => <li className='errors' key={idx}>{error}</li>)}
          </ul>
          <label className='description-label'>
            <textarea
            value={answer}
            placeholder='Description'
            onChange={(e) => setAnswer(e.target.value)}
            required />
          </label>
          <button className='submit-question' type='submit' disabled={errors.length === 0 ? false : true}>Submit Edit</button>
        </form>
      </div>
    </div>
  )
}

export default EditAnswer;
