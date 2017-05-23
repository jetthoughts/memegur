import { types as albumTypes } from '../actions/Album';

const initialState = { album: {} };

export const albumReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case albumTypes.ALBUM_FETCH: {
      return { ...state };
    }
    case albumTypes.ALBUM_SUCCESS: {
      const { album } = payload;
      return { ...state, album };
    }
    default: {
      return state;
    }
  }
};
