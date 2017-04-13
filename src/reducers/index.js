import { combineReducers } from 'redux';
import user from './user';
import settings from './settings';
import ui from './ui';


const rootReducer = combineReducers({
  user,
  settings,
  ui,
});

export default rootReducer;
