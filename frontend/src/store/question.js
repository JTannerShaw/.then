import { csrfFetch } from './csrf';

const LOAD = 'question/LOAD'

const load = (list) => ({
    type: LOAD,
    list
  });

export const getQuestion = () => async dispatch => {
  const response = await csrfFetch(`/api/questions`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
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
        list: action.ist
      };
    }
    default:
      return state;
  }
}

export default questionReducer;
