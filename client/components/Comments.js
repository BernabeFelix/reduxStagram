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
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  }
  render() {
    return (
      <div className="comment">
        {this.props.comments.map(this.renderSingleComment)}
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden="hidden" />
        </form>
      </div>
    );
  }
}

export default Comments;
