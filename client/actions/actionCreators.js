// increment
export const incrementLikes = index => {
  return {
    type: "INCREMENT_LIKES",
    index
  };
};
// add comment
export const addComment = (postId, author, comment) => {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
};
// remove comment
export const removeComment = (postId, index) => {
  return {
    type: "REMOVE_COMMENT",
    postId,
    index
  };
};
