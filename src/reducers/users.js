import { SET_USERS, SET_GG } from '../constants';

const initialState = { users: [], gg: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };

    case SET_GG:
      return {
        ...state,
        gg: action.gg
      };
    default:
      return state;
  }
}
