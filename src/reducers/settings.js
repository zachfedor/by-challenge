import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_SUCCESS,
} from '../actions';


const settings = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user.settings;
    case LOGOUT_SUCCESS:
      return {};
    case UPDATE_SUCCESS:
      return Object.assign(
        {},
        { ...state },
        { [action.setting]: action.value }
      );
    default:
      return state;
  };
};

export default settings;
