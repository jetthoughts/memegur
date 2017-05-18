import { combineReducers } from 'redux';
import { albumReducer } from './AlbumReducer';
import { galleryReducer } from './GalleryReducer';

export default combineReducers({
  album: albumReducer,
  gallery: galleryReducer,
});
