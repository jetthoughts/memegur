import { call, put } from 'redux-saga/effects';
import { actionCreators } from '../reducers/GalleryReducer';

export function* getGallery(api, action) {
  const { galleryName: section, sort, page } = action;
  const params = { section, sort, page };

  const response = yield call(api.getGallery, params);

  if (response.ok) {
    const gallery = response.data.data;
    yield put(actionCreators.gallerySuccess(gallery));
  }
}
