import React from "react";
import { render } from "react-dom";
import css from "./styles/style.styl";
// import components
import App from "./components/App";
import PostGrid from "./components/PostGrid";
import SinglePost from "./components/SinglePost";
// import router
import { Router, Route, IndexRoute, browserHistory } from "react-router";

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostGrid} />
      <Route path="/view/:postId" component={SinglePost} />
    </Route>
  </Router>
);

render(router, document.getElementById("root"));
