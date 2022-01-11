import { csrfFetch } from './csrf';

const LOAD = 'session/LOAD'
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const load = (list) => ({
  type: LOAD,
  list
})

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
const removeUser = () => {
  return {
    type: REMOVE_USER
  }
}
export const demoUser = () => async dispatch => {
  const response = await csrfFetch('/api/users/demo');

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return data;
  }
}

export const getUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  }
}
export const getAllUsers = () => async dispatch => {
  const response = await csrfFetch('/api/users');
  const data = await response.json();
  dispatch(load(data));
}

export const signup = (user) => async dispatch => {
  const { username, email, password } = user
  const response = await csrfFetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      email,
      password,
    })
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
}

export const restore = () => async dispatch => {
  const response = await csrfFetch('/api/session');

  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
}

export const logout = (user) => async dispatch => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
}


export const login = (user) => async dispatch => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
}

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
    newState = Object.assign({}, state);
    newState.user = null;
    return newState;
    case LOAD:
      return {...state, entries: [...action.list]}
  default:
    return state;
  }
};

export default sessionReducer;
