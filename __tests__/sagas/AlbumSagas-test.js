import { fetchAlbum } from '../../app/sagas/AlbumSagas';
import albumActions from '../../app/actions/Album';
import API from '../../app/services/Api';

describe('getAlbum', () => {
  it('calls success action on resolve', () => {
    const api = API.create();
    const alnumId = 'albumId';
    const fetchAction = albumActions.albumFetch(alnumId);
    const gen = fetchAlbum(api, fetchAction);
    const album = { id: alnumId, title: 'Test' };

    const apiCallEffect = {
      CALL: { fn: api.getAlbum, args: [alnumId] },
    };
    expect(gen.next().value).toMatchObject(apiCallEffect);

    const response = { ok: true, data: { data: album } };
    const successActionPutEffect = { PUT: { action: albumActions.albumSuccess(album) } };
    expect(gen.next(response).value).toMatchObject(successActionPutEffect);
  });
});
