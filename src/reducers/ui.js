import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
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
      return {
        ...state,
        loading: false,
      };
    case SHOW_ERROR:
      return {
        loading: false,
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
