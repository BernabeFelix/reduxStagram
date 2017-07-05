import React, { PropTypes } from "react";
import { Link } from "react-router";
import CSSTransitionGroup from "react-addons-css-transition-group";

class PostGridElement extends React.Component {
  render() {
    const { post, comments } = this.props;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              className="grid-photo"
            />
          </Link>
          <CSSTransitionGroup
            transitionName="link"
            transitionEnterTimeOut={500}
            transitionLeaveTimeOut={500}
          >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>
            {post.caption}
          </p>
          <div className="control-buttons">
            <button className="likes">
              &hearts; {post.likes}
            </button>
            <Link to={`/view/${post.code}`} className="button">
              <span className="comment-count">
                <span className="speech-bubble" />
                {comments.length > 0 ? comments.length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default PostGridElement;
