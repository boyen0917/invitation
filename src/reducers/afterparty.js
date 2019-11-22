import { SET_TICKET_STATUS } from '../constants';

const initialState = { isShowTicket: false };

export default function setBrowserInfo(state = initialState, action) {
  
  switch (action.type) {
    case SET_TICKET_STATUS:
      return {
        ...state,
        isShowTicket: !state.isShowTicket
      };
    default:
      return state;
  }
}
