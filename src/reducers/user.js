import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../actions';


const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user;
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default user;
