import { takeLatest } from 'redux-saga/effects';

import API from '../services/Api';
import { getGallery } from './ImgurSagas';
import { types } from '../reducers/GalleryReducer';

const api = API.create();

export default function* root() {
  yield [
    takeLatest(types.GALLERY_REQUEST, getGallery, api),
  ];
}
