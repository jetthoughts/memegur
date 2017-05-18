import albumActions from '../../app/actions/Album';
import { albumReducer } from '../../app/reducers/AlbumReducer';

describe('albumReducer', () => {
  it('returns current state for unknown action type', () => {
    const state = { album: {} };
    const action = { type: 'UNKNOWN_TYPE' };

    expect(albumReducer(state, action)).toMatchObject(state);
  });

  it('returns default state', () => {
    const action = { type: 'UNKNOWN_TYPE' };

    const expectedState = {};
    expect(albumReducer(undefined, action)).toMatchObject(expectedState);
  });

  it('returns state with album info on success action', () => {
    const state = { album: {} };
    const album = { id: 1, title: 'Test' };
    const action = albumActions.albumSuccess(album);

    expect(albumReducer(state, action)).toMatchObject({ album });
  });
});
