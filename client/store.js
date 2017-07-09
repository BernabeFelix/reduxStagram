import { createStore, compse } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

// import root reducer
import rootReducer from "./reducers/index";
// import default data
import comments from "./data/comments";
import posts from "./data/posts";

// create an object for default data
const defaltState = {
  comments,
  posts
};

const store = createStore(rootReducer, defaltState);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
