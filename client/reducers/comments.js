const postComments = (state, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          text: action.comment,
          user: action.author
        }
      ];
      break;
    case "REMOVE_COMMENT":
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  if (action.postId) {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }

  return state;
};

export default comments;
