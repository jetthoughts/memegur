import { call, put } from 'redux-saga/effects';
import albumActions from '../actions/Album';

export function* fetchAlbum(api, action) {
  const { payload } = action;
  const { albumId } = payload;

  const response = yield call(api.getAlbum, albumId);

  if (response.ok) {
    const album = response.data.data;
    yield put(albumActions.albumSuccess(album));
  }
}
