import React from "react";
import "./App.css";

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
          <form className="form">
            <div className="formItem">
              <label>
                用户名
                <input type="text" id="username"></input>
              </label>
            </div>
            <div className="formItem">
              <label>
                评论内容
                <textarea rows="3"></textarea>
              </label>
            </div>
            <div className="btn">
              <button>提交</button>
            </div>
          </form>

          {/* 评论展示 */}
          <div className="commentList">
            <div className="commentHeader">评论回复</div>
            <div className="commentBody">
              <ul>
                <li className="commentItem">
                  <div className="commentSay">丁元英说:</div>
                  <div className="commentBtn">
                    <button className="deleteBtn">删除</button>
                  </div>
                  <div className="commentReply">hello,芮小丹</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
