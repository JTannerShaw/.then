import { csrfFetch } from './csrf';

const LOAD = 'question/LOAD'
const ADD_ONE = 'question/ADD_ONE';


const load = (list) => ({
    type: LOAD,
    list
  });

const addOneQuestion = (question) => ({
  type: ADD_ONE,
  question
})

export const createQuestion = (data) => async dispatch => {
  const response = await csrfFetch(`/api/questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    const question = await response.json();
    dispatch(addOneQuestion(question));
    return question;
  }
}

export const getAllQuestions = () => async dispatch => {
  const response = await csrfFetch(`/api/questions`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
}

export const getQuestion = (id) => async dispatch => {
  const response = await csrfFetch(`/api/questions/${id}`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list))
  }
}

export const updateQuestion = (data) => async dispatch => {
  const response = await csrfFetch(`/api/questions/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

const initialState = {};

const questionReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD: {
      const allQuestions = {};
      action.list.forEach((question) => {
        allQuestions[question.id] = question;
      });
      return {
        ...allQuestions,
        ...state,
        list: action.list
      };
    }
    case ADD_ONE: {
      if (!state[action.question.id]) {
        const newState = {
          ...state,
          [action.question.id]: action.question
        }
        const questionList = newState.list.map((id) => newState[id]);
        questionList.push(action.question);
        newState.list = questionList;
        return newState;
      }
    }
    default:
      return state;
  }
}

export default questionReducer;
