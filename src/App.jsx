import React from "react";
import "./App.css";
import AddComment from "./pages/AddComment";
import CommentList from "./pages/CommentList";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* 头部标题 */}
        <div className="header">
          <div className="container">
            <div className="title">请发表对React的评论</div>
          </div>
        </div>

        {/* 主体 */}
        <div className="con">
          {/* 评论输入 */}
          <AddComment />

          {/* 评论展示 */}
          <CommentList />
        </div>
      </div>
    );
  }
}
