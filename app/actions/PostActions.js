import _ from 'lodash';
import axios from 'axios';
import { CLIENT_ID, DEFAULT_IMAGE_URL } from '../config';
import {
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAIL
} from './types';

export const postsFetch = () => {
  return (dispatch) => {
    axios.get(
      "https://api.imgur.com/3/gallery/hot/viral/0.json",
      { headers: { 'Authorization': `Client-ID ${CLIENT_ID}` } })
      .then(response => {
        const posts = buildPostsWithImages(response);
        fetchPostsSuccess(dispatch, posts);
      })
      .catch(error => fetchPostsFail(dispatch, error));
  };
};

const fetchPostsSuccess = (dispatch, posts) => {
  dispatch({
    type: POSTS_FETCH_SUCCESS,
    payload: posts
  });
};

const fetchPostsFail = (dispatch, error) => {
  console.log(error);

  dispatch({ type: POSTS_FETCH_FAIL });
};

const buildPostsWithImages = (response) => {
  let imageUrl = '';

  const posts = response.data.data;

  const result = _.map(posts, (post) => {
    if (post.is_album) {
      axios.get(
        `https://api.imgur.com/3/gallery/album/${post.id}/images`,
        { headers: { 'Authorization': `Client-ID ${CLIENT_ID}` } })
        .then(response => {
          imageUrl = _.get(
            response,
            'response.data.data[0].link',
            DEFAULT_IMAGE_URL
          )
        })
        .catch(error => {
          imageUrl = DEFAULT_IMAGE_URL;
        });
    }
    else {
      imageUrl = post.link;
    }

    return { ...post, link: imageUrl };
  });

  return result;
};
