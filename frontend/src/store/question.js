import { csrfFetch } from './csrf';

const LOAD = 'question/LOAD'
const ADD_ONE = 'question/ADD_ONE';
const UPDATE = 'question/UPDATE'

const load = (list) => ({
    type: LOAD,
    list
  });

const addOneQuestion = (question) => ({
  type: ADD_ONE,
  question
})

const editQuestion = (question) => ({
  type: UPDATE,
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
    dispatch(addOneQuestion(list))
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
  if (response.ok) {
    const data = await response.json();
    dispatch(editQuestion(data))
    return data;
  }
}

const initialState = {entries: []};

const questionReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case LOAD: {
      return {...state, entries: [...action.list]}
    }
    case ADD_ONE: {
      return {...state, entries: [...state.entries, action.question]}
    }
    case UPDATE: {
      return {...state, [action.data]: action.id}
    }
    default:
      return state;
  }
}

export default questionReducer;
