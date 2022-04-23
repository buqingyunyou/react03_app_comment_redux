import React from "react";

export default class AddComment extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
