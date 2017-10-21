import { GET_POSTS, NEW_POST, UPDATE_POST, DELETE_POST } from '../actions'

// look @ AXIOS LAB FOR THESE REQUESTS - lines with return statements should be changed
export default (posts = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      console.log(`THIS IS PAYLOAD >>>>>>`, action.payload)
      // console.log(`THIS IS PAYLOAD >>>>>>` + [...posts]);
      return action.payload.data
    case NEW_POST:
      const existingPosts = posts.concat(action.payload.data)
      return existingPosts
    case UPDATE_POST:
      return action.payload.data
    case DELETE_POST:
      // copy the posts array
      // const existing = [...posts]
      // const existing = new Array.from(posts)
      // cpoy an object (if posts were an object)
      // const existing = Object.assign({}. posts)
      return action.payload.data
    default:
      return posts
  }
}
