import { combineReducers } from 'redux';
import { albumReducer } from './AlbumReducer';
import { galleryReducer } from './GalleryReducer';

export default combineReducers({
  albumReducer,
  gallery: galleryReducer,
});
