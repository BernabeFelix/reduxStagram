import React from "react";

class Comments extends React.Component {
  renderSingleComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>
            {comment.user}
          </strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(null, this.props.postId, i)}
          >
            &times;
          </button>
        </p>
      </div>
    );
  }
  handleSubmit(e) {
    // prevent page refresh
    e.preventDefault();
    const { author, comment } = this.refs;
    const { postId } = this.props;
    this.props.addComment(postId, author.value, comment.value);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comment">
        {this.props.postComments.map(this.renderSingleComment.bind(this))}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden="hidden" />
        </form>
      </div>
    );
  }
}

export default Comments;
