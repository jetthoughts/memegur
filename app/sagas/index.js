import { takeLatest } from 'redux-saga/effects';

import API from '../services/Api';
import { getGallery } from './GallerySagas';
import { fetchAlbum } from './AlbumSagas';
import { types as GalleryTypes } from '../actions/Gallery';
import { types as AlbumTypes } from '../actions/Album';

const api = API.create();

export default function* root() {
  yield [
    takeLatest(GalleryTypes.GALLERY_REQUEST, getGallery, api),
    takeLatest(AlbumTypes.ALBUM_FETCH, fetchAlbum, api),
  ];
}
