import deepFreeze from 'deep-freeze';
import galleryActions from '../../app/actions/Gallery';
import { galleryReducer } from '../../app/reducers/GalleryReducer';

describe('GalleryReducer', () => {
  it('returns current state for unknown action type', () => {
    const state = { posts: [] };
    const action = { type: 'UNKNOWN_TYPE' };

    deepFreeze(state);

    expect(galleryReducer(state, action)).toMatchObject(state);
  });

  it('returns default state', () => {
    const action = { type: 'UNKNOWN_TYPE' };

    const expectedState = { posts: [] };
    expect(galleryReducer(undefined, action)).toMatchObject(expectedState);
  });
  
  it('returns state with new posts on gallery success action', () => {
    const state = { posts: [] };
    const post = { id: 1, title: 'Test post' };
    const posts = [post];
    const action = galleryActions.gallerySuccess(posts);

    expect(galleryReducer(state, action)).toMatchObject({ posts: posts });
  });
});
