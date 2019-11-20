import { combineReducers } from 'redux';
import usersReducer from './users';
import dataReducer from './data';
import timeReducer from './time';
import galleryReducer from './gallery';

export default combineReducers({
  usersReducer,
  dataReducer,
  timeReducer,
  galleryReducer
});
