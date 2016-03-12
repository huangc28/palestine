import { CREATE_POST_STORE } from '../../actions';
const __INIT__ = {};
__INIT__.posts = [];
export default function postsReducer (state = __INIT__, action) {
  if (action.type === CREATE_POST_STORE) {
    console.log('reducer');
    console.log(action);
    return {...state, posts: action.payload.posts};
  }
  return state;
};
