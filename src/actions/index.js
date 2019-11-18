import { GET_USERS_SAGA, SET_USERS, SET_GG, GET_TIME } from '../constants';

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}


export function getTime(currentTime) {
  return {
    type: GET_TIME,
    currentTime
  };
}

//Sagas
export function getUsersSaga() {
  return {
    type: GET_USERS_SAGA
  };
}
