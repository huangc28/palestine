import { CREATE_POST_STORE } from '../../actions';
const __INIT__ = {};
export default function postsReducer (state = __INIT__, action) {
  if (action.type === CREATE_POST_STORE) {
    return {...state, posts: action.payload.posts};
  }
  return state;
};
