import React from "react";
import PostGridElement from "./PostGridElement";

class PostGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) =>
          <PostGridElement
            key={i}
            i={i}
            post={post}
            comments={this.props.comments[post.code] || []}
          />
        )}
      </div>
    );
  }
}

export default PostGrid;
