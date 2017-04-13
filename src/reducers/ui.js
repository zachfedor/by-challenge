import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SHOW_ERROR,
  HIDE_ERROR,
} from '../actions';


const initialState = {
  loading: false,
  error: '',
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

export default ui;
