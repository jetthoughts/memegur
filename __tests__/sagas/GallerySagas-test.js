import { getGallery } from '../../app/sagas/GallerySagas';
import galleryActions from '../../app/actions/Gallery';
import API from '../../app/services/Api';

describe('getGallery', () => {
  it('calls success action on resolve', () => {
    const api = API.create();
    const requestAction = galleryActions.galleryRequest('galleryName');
    const gen = getGallery(api, requestAction);
    const gallery = [{}];

    const apiCallEffect = {
      CALL: { fn: api.getGallery, args: [{ page: undefined, section: 'galleryName', sort: undefined }] },
    };
    expect(gen.next().value).toMatchObject(apiCallEffect);

    const response = { ok: true, data: { data: gallery } };
    const successActionPutEffect = { PUT: { action: galleryActions.gallerySuccess(gallery) } };
    expect(gen.next(response).value).toMatchObject(successActionPutEffect);
  });
});
