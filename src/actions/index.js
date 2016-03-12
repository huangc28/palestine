export const CREATE_POST_STORE = 'create-post-store';

export function createPostsStore (posts) {
  return (dispatch) => {
    // console.log('posts');
    // console.log(posts);
    // console.log(dispatch);
    const payload = { posts };
    // console.log(payload);
    dispatch({type: CREATE_POST_STORE, payload});
  };
};
