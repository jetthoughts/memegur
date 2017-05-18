import apisauce from 'apisauce';

const BASE_URL = 'https://api.imgur.com/3/';
const FIRST_PAGE = 0;
const DEFAULT_SORT = 'hot';

const create = () => {
  const api = apisauce.create({
    baseURL: BASE_URL,
    headers: {
      'Authorization': 'Client-ID {{CLIENT_ID}}',
    },
    // 10 second timeout...
    timeout: 10000,
    responseType: 'json',
  });
  //
  const getGallery = ({ section, sort = DEFAULT_SORT, page = FIRST_PAGE }) => {
    return api
      .get(`gallery/${section}/${sort}/${page}`)
      .then(response => response);
  };

  const getAlbum = (albumId) => {
    return api
      .get(`gallery/${albumId}`)
      .then(response => response);
  };

  return {
    getGallery,
    getAlbum
  };
};

export default { create };
