import galleryActions from '../../app/actions/Gallery';
import { galleryReducer } from '../../app/reducers/GalleryReducer';

describe('GalleryReducer', () => {
  it('returns current state for unknown action type', () => {
    const state = { posts: [] };
    const action = { type: 'UNKNOWN_TYPE' };

    expect(galleryReducer(state, action)).toMatchObject(state);
  });

  it('returns default state', () => {
    const action = { type: 'UNKNOWN_TYPE' };

    const expectedState = { posts: [] };
    expect(galleryReducer(undefined, action)).toMatchObject(expectedState);
  });
  
  it('returns state with new posts on gallery success action', () => {
    const state = { posts: [] };
    const post = { id: 1, title: 'Test post', link: 'https://i.imgur.com/Qhyj95Uh.gif' };
    const posts = [post];
    const action = galleryActions.gallerySuccess(posts);

    expect(galleryReducer(state, action)).toMatchObject({ posts: posts });
  });

  it('converts id into https link for non-album entries', () => {
    const post = { id: 'Qhyj95Uh', link: 'http://i.imgur.com/Qhyj95Uh.gif', is_album: false };
    const action = galleryActions.gallerySuccess([post]);

    const newState = galleryReducer(undefined, action);
    const expectedState = { id: 'Qhyj95Uh', link: 'https://i.imgur.com/Qhyj95Uh.gif', is_album: false };
    expect(newState.posts[0]).toMatchObject(expectedState);
  });

  it('converts cover info into https link for album entries', () => {
    const post = { id: 1, cover: 'Qhyj95Uh', is_album: true };
    const action = galleryActions.gallerySuccess([post]);

    const newState = galleryReducer(undefined, action);
    expect(newState.posts[0]).toMatchObject({ id: 1, link: 'https://i.imgur.com/Qhyj95Uh.jpg', is_album: true });
  });
});
