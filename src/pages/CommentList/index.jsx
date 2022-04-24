import React from "react";
import { connect } from "react-redux";
import CommentItem from "./CommentItem";
import PropTypes from "prop-types";

class CommentList extends React.Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  };

  render() {
    const { comments } = this.props;
    if (!comments.length) {
      return (
        <div>
          <div className="commentList">
            <div className="commentHeader">评论回复</div>
            <div className="empty">暂无评论，请添加评论！</div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="commentList">
          <div className="commentHeader">评论回复</div>
          <div className="commentBody">
            <ul>
              {comments.map((item) => {
                return <CommentItem key={item.key} comment={item} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// connect参数一，是将store中state状态，通过props传入UI组件
export default connect(
  (state) => ({ comments: state.comments }),
  null
)(CommentList);
