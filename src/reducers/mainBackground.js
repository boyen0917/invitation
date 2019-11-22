import { SET_TEXT_SHOW } from '../constants';

const initialState = { isTextShow: true };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT_SHOW:
      return {
        ...state,
        isTextShow: action.isTextShow
      };
    default:
      return state;
  }
}
