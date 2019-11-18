import { combineReducers } from 'redux';
import usersReducer from './users';
import dataReducer from './data';
import timeReducer from './time';

export default combineReducers({
  usersReducer,
  dataReducer,
  timeReducer,
});
