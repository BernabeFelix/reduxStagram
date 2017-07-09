import React from "react";
import PostGridElement from "./PostGridElement";
import Comments from "./Comments";

class SinglePost extends React.Component {
  render() {
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex(post => post.code === postId);

    return (
      <div className="single-photo">
        <PostGridElement {...this.props} post={this.props.posts[i]} i={i} />
        <Comments comments={this.props.comments[postId]} />
      </div>
    );
  }
}

export default SinglePost;
