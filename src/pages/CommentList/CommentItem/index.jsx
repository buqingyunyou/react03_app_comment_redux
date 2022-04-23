import React from "react";

export default class CommentItem extends React.Component {
  render() {
    return (
      <li className="commentItem">
        <div className="commentSay">丁元英说:</div>
        <div className="commentBtn">
          <button className="deleteBtn">删除</button>
        </div>
        <div className="commentReply">hello,芮小丹</div>
      </li>
    );
  }
}
