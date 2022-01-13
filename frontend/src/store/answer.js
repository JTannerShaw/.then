import { csrfFetch } from "./csrf";

const LOAD = 'answer/LOAD';
const ADD_ONE = 'answer/ADD_ONE';
const UPDATE = 'answer/UPDATE';
const REMOVE = 'answer/REMOVE';

const load = (list) => ({
  type: LOAD,
  list
});

const addOneAnswer = (answer) => ({
  type: ADD_ONE,
  answer
});

const editAnswer = (answer) => ({
  type: UPDATE,
  answer
})

const removeAnswer = (answer) => ({
  type: REMOVE,
  answer
})


export const createAnswer = (data) => async dispatch => {
  const response = await csrfFetch(`/api/answers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    const answer = await response.json();
    dispatch(addOneAnswer(answer));
    return answer;
  }
}


export const deleteAnswer = (data) => async dispatch => {
  const response = await csrfFetch(`/api/answers/${data.id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    const deleted = await response.json()
    dispatch(removeAnswer(deleted))
  }
}


export const getAllAnswers = () => async dispatch => {
  const response = await csrfFetch(`/api/answers`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list))
  }
}


export const getAnswer = (id) => async dispatch => {
  const response = await csrfFetch(`/api/answers/${id}`);
  if (response.ok) {
    const list = await response.json();
    dispatch(addOneAnswer(list))
  }
}


export const updateAnswer = (data) => async dispatch => {
  const response = await csrfFetch(`/api/answers/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(editAnswer(data))
    return data;
  }
}


const initialState = {entries: []};

const answerReducer = (state = initialState, action) => {
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
    case REMOVE: {
      newState = { ...state }
      delete newState[action.question]
      return newState;
    }
    default:
      return state;
  }
}

export default answerReducer;
