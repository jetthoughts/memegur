import { types as GalleryTypes } from '../actions/Gallery';

const initialState = {
  posts: [],
};

export const galleryReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case GalleryTypes.GALLERY_SUCCESS: {
      return { ...state, posts: action.gallery };
    }
    case GalleryTypes.GALLERY_REQUEST: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
