export const types = {
  ALBUM_SUCCESS: 'ALBUM_SUCCESS',
  ALBUM_FETCH: 'ALBUM_FETCH',
};

export default {
  albumSuccess: (album) => {
    return { type: types.ALBUM_SUCCESS, payload: { album } };
  },
  albumFetch: (albumId) => {
    return { type: types.ALBUM_FETCH, payload: { albumId } };
  },
};
