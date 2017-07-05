import React from "react";
import PostGridElement from "./PostGridElement";

class PostGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) =>
          <PostGridElement {...this.props} key={i} i={i} post={post} />
        )}
      </div>
    );
  }
}

export default PostGrid;
