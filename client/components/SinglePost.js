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
        <Comments
          postComments={this.props.comments[postId] || []}
          postId={postId}
          {...this.props}
        />
      </div>
    );
  }
}

export default SinglePost;
