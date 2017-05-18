import { types as GalleryTypes } from '../actions/Gallery';

const initialState = {
  posts: [],
};

function processGalleryPosts(posts) {
  return posts.map((post) => {
    if (post.is_album) {
      // TODO: Handle cases when image have gif format
      const link = `https://i.imgur.com/${post.cover}.jpg`;
      return { ...post, link };
    } else {
      const httpsLink = post.link.replace(/http:/, 'https:');
      return { ...post, link: httpsLink };
    }
  });
}

export const galleryReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case GalleryTypes.GALLERY_SUCCESS: {
      const posts = processGalleryPosts(action.gallery);
      return { ...state, posts };
    }
    case GalleryTypes.GALLERY_REQUEST: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
