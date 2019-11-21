import { 
  SET_USERS, 
  GET_TIME,
  SET_GALLERY_INDEX,
  ADD_GALLERY_INDEX,
  SUB_GALLERY_INDEX,
  SET_TICKET_STATUS
 } from '../constants';

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

export function setGalleryIndex(galleryIndex) {
  return {
    type: SET_GALLERY_INDEX,
    galleryIndex
  };
}

export function addGalleryIndex(galleryIndex) {
  return {
    type: ADD_GALLERY_INDEX,
    galleryIndex
  };
}

export function subGalleryIndex(galleryIndex) {
  return {
    type: SUB_GALLERY_INDEX,
    galleryIndex
  };
}

export function setTicketStatus() {
  return {
    type: SET_TICKET_STATUS
  };
}

//Sagas
// export function getUsersSaga() {
//   return {
//     type: GET_USERS_SAGA
//   };
// }
