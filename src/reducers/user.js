import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../actions';


const user = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...action.user
      };
    case LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default user;
