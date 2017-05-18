import { takeLatest } from 'redux-saga/effects';

import API from '../services/Api';
import { getGallery } from './GallerySagas';
import { types as GalleryTypes } from '../actions/Gallery';

const api = API.create();

export default function* root() {
  yield [
    takeLatest(GalleryTypes.GALLERY_REQUEST, getGallery, api),
  ];
}
