import React from "react";
import { connect } from "react-redux";
import { removeComment } from "../../../redux/actions";
import PropTypes from "prop-types";

class CommentItem extends React.Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    removeComment: PropTypes.func.isRequired,
  };
  handleClick = () => {
    const { removeComment } = this.props;
    removeComment(this.props.comment.key);
  };
  render() {
    const { username, content } = this.props.comment;
    return (
      <li className="commentItem">
        <div className="commentSay">{username}说:</div>
        <div className="commentBtn">
          <button className="deleteBtn" onClick={this.handleClick}>
            删除
          </button>
        </div>
        <div className="commentReply">{content}</div>
      </li>
    );
  }
}

export default connect(null, { removeComment })(CommentItem);
