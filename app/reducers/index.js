import { combineReducers } from 'redux';
// import PostReducer from './PostReducer';
import { galleryReducer } from './GalleryReducer';

export default combineReducers({
  posts: galleryReducer,
});
