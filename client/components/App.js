import React from "react";
import { Link } from "react-router";
// import redux stuff
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/"> ReduxTagram </Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
//////////// start redux ////////////
const mapStateToProps = state => {
  return {
    comments: state.comments,
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//////////// end redux ////////////
