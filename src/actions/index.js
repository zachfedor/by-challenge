import fetch from 'isomorphic-fetch';

const apiRoot = 'http://codingchallenge.staging.brandyourself.com/';

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

export const SHOW_ERROR = 'SHOW_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';


// Action Creators
const loginRequest = email => ({
  type: LOGIN_REQUEST,
  email,
});
const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});

const logoutRequest = (email) => ({
  type: LOGOUT_REQUEST,
  email,
});
const logoutSuccess = (msg) => ({
  type: LOGOUT_SUCCESS,
  msg,
});

const updateRequest = (setting, value) => ({
  type: UPDATE_REQUEST,
  setting,
  value,
});
const updateSuccess = (setting, value) => ({
  type: UPDATE_SUCCESS,
  setting,
  value,
});

const showError = (id, error) => ({
  type: SHOW_ERROR,
  id,
  error,
});
const hideError = (id) => ({
  type: HIDE_ERROR,
  id,
});


// Async Action Creators
let nextErrorId = 0;
export const showErrorMsg = (error) => (dispatch) => {
  const id = nextErrorId++;

  dispatch(showError(id, error));

  setTimeout(() => {
    dispatch(hideError(id));
  }, 10000);
};


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
    .then(json => {
      if (json.error) {
        dispatch(showErrorMsg(json.error));
      } else {
        dispatch(loginSuccess(json.user));
      }
    });
};

export const logout = (email) => (dispatch) => {
  const postData = {
    method: 'POST',
    credentials: 'include',
  };

  dispatch(logoutRequest(email));

  return fetch(apiRoot + 'logout', postData)
    .then(resp => resp.json())
    .then(json => {
      if (json.error) {
        dispatch(showErrorMsg(json.error));
      } else {
        dispatch(logoutSuccess(json));
      }
    });
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

  return fetch(apiRoot + 'settings', postData)
    .then(resp => resp.json())
    .then(json => {
      if (json.error) {
        console.warn(json.error);

        const msg = 'Sorry, an error occured. Try it again.';
        dispatch(showErrorMsg(msg));
      } else {
        dispatch(updateSuccess(setting, value));
      }
    });
};
