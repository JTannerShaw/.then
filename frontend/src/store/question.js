import { csrfFetch } from './csrf';


const GET_QUESTION = 'question/getQuestion'

const getQuestions = (questions) => {
  return {
    type: GET_QUESTION,
    payload: questions
  }
}


const getQuestion = () => async dispatch => {
  const response = await csrfFetch('/api/question');

  if (response.ok) {
    const data = await response.json();
    dispatch(getQuestions(data))
    return response;
  }
}

const initialState = {};

const questionReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case GET_QUESTION:
      newState = Object.assign({}, state);
      newState.question = action.payload;
      return newState;
  }
}

const questionReducer;
