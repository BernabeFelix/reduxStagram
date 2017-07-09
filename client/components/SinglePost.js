import React from "react";
import PostGridElement from "./PostGridElement";
import Comments from "./Comments";

class SinglePost extends React.Component {
  render() {
    const i = this.props.posts.findIndex(
      post => post.code === this.props.params.postId
    );

    return (
      <div className="single-photo">
        <PostGridElement {...this.props} post={this.props.posts[i]} i={i} />
        <Comments />
      </div>
    );
  }
}

export default SinglePost;
