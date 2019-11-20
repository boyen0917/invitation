import { GET_TIME } from '../constants';

const initialState = { currentTime: new Date() };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case GET_TIME:
      return {
        ...state,
        currentTime: action.currentTime
      };
    default:
      return state;
  }
}
