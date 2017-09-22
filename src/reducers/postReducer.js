import { POST_ACTIONS } from '../actions';

// look @ AXIOS LAB FOR THESE REQUESTS - lines with return statements should be changed
export default (posts = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload.data;
    case NEW_POST:
      return action.payload.data;
    case UPDATE_POST:
      return action.payload.data;
    case DELETE_POST:
      return action.payload.data;
    default:
      return posts;
  }
};
