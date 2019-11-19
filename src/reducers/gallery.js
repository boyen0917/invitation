import { 
  SET_GALLERY_INDEX, 
  ADD_GALLERY_INDEX, 
  SUB_GALLERY_INDEX 
} from '../constants';

const initialState = { galleryIndex: 0 };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {

    case SET_GALLERY_INDEX:
      return {
        ...state,
        galleryIndex: action.galleryIndex
      };

    case ADD_GALLERY_INDEX:
      return {
        ...state,
        galleryIndex: state.galleryIndex + 1
      };
    
    case SUB_GALLERY_INDEX:
      return {
        ...state,
        galleryIndex: state.galleryIndex -1
      };

    default:
      return state;
  }
}
