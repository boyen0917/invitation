import { combineReducers } from 'redux';
import dataReducer from './data';
import timeReducer from './time';
import galleryReducer from './gallery';
import mbReducer from './mainBackground';
import afterpartyReducer from './afterparty';

export default combineReducers({
  dataReducer,
  timeReducer,
  galleryReducer,
  mbReducer,
  afterpartyReducer
});
