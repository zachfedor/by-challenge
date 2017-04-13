import fetch from 'isomorphic-fetch';

const apiRoot = 'http://codingchallenge.staging.brandyourself.com/';

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';


// Action Creators
const loginRequest = email => ({
  type: LOGIN_REQUEST,
  email,
});
const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});
const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});

const logoutRequest = (email) => ({
  type: LOGOUT_REQUEST,
  email,
});
const logoutSuccess = (msg) => ({
  type: LOGOUT_SUCCESS,
  msg,
});
const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  error,
});

const updateRequest = (setting, value) => ({
  type: UPDATE_REQUEST,
  setting,
  value,
});
const updateSuccess = () => ({
  type: UPDATE_SUCCESS,
});
const updateFailure = () => ({
  type: UPDATE_FAILURE,
});


// Async Action Creators
export const login = (email, password) => (dispatch) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const postData = {
    method: 'POST',
    credentials: 'include',
    body: formData,
  };

  dispatch(loginRequest(email));

  return fetch(apiRoot + 'login', postData)
    .then(resp => resp.json())
    .then(json => dispatch(loginSuccess(json.user)))
    .catch(err => dispatch(loginFailure(err)));
};

export const logout = (email) => (dispatch) => {
  const postData = {
    method: 'POST',
    credentials: 'include',
  };

  dispatch(logoutRequest(email));

  return fetch(apiRoot + 'logout', postData)
    .then(resp => resp.json())
    .then(json => dispatch(logoutSuccess(json)))
    .catch(err => dispatch(logoutFailure(err)));
};

export const updateSetting = (setting, value) => (dispatch) => {
  const formData = new FormData();
  formData.append(setting, value);
  const postData = {
    method: 'POST',
    credentials: 'include',
    body: formData,
  };

  dispatch(updateRequest(setting, value));

  return fetch(apiRoot + 'setting', postData)
    .then(resp => resp.json())
    .then(json => dispatch(updateSuccess(json)))
    .catch(err => dispatch(updateFailure(err)));
};
