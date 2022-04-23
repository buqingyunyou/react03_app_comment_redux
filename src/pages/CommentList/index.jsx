import React  from "react";
import CommentItem from "./CommentItem";

export default class CommentList extends React.Component {
  render() {
    return (
      <div>
        <div className="commentList">
        <div className="commentHeader">评论回复</div>
        <div className="commentBody">
          <ul>
            <CommentItem />
          </ul>
        </div>
      </div>
      </div>
    );
  }
}
