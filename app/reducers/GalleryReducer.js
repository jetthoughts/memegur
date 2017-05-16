export const types = {
  GALLERY_SUCCESS: 'GALLERY_SUCCESS',
  GALLERY_REQUEST: 'GALLERY_REQUEST',
};

export const actionCreators = {
  gallerySuccess: (gallery) => {
    return { type: types.GALLERY_SUCCESS, gallery };
  },
  galleryRequest: (galleryName) => {
    return { type: types.GALLERY_REQUEST, galleryName };
  },
};

const initialState = {
  posts: [],
};

export const galleryReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.GALLERY_SUCCESS: {
      return { ...state, posts: action.gallery };
    }
    case types.GALLERY_REQUEST: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
