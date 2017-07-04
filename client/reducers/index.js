import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import comments from "./comments";
import posts from "./posts";

const reducer = combineReducers({ posts, comments, routing: routerReducer });

export default reducer;
