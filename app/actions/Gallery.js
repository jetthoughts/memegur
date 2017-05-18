export const types = {
  GALLERY_SUCCESS: 'GALLERY_SUCCESS',
  GALLERY_REQUEST: 'GALLERY_REQUEST',
};

export default {
  gallerySuccess: (gallery) => {
    return { type: types.GALLERY_SUCCESS, gallery };
  },
  galleryRequest: (galleryName) => {
    return { type: types.GALLERY_REQUEST, galleryName };
  },
};
