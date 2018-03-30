import { combineReducers } from 'redux';

const FETCH_POST = 'FETCH_POST';
const FETCH_PROFILE = 'FETCH_PROFILE';


const profileReducer = (profile = {}, action) => profile;

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_POST:
      return [{ id: 1, title: 'hello' }];
    default:
      return posts;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
  profile: profileReducer,
});

export default rootReducer;
