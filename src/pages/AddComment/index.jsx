import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// 引入action工厂函数
import { addComment } from "../../redux/actions";

class AddComment extends React.Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  };
  state = {
    username: "",
    content: "",
  };
  handleChange = (key) => {
    return (e) => {
      this.setState({
        [key]: e.target.value.trim(),
      });
    };
  };
  handleSubmit = (e)=>{
    const {addComment} = this.props;
    e.preventDefault();
    if(!this.state.username){
      alert('请输入用户名')
      return;
    }
    if(!this.state.content){
      alert('请输入评论内容')
      return;
    }
    // 分发action
    addComment(this.state);

    // 清空输入框
    this.setState({
      username:'',
      content:''
    })
  }
  render() {
    const { username, content } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="formItem">
            <label>
              用户名
              <input
                type="text"
                placeholder="请输入用户名"
                value={username}
                onChange={this.handleChange("username")}></input>
            </label>
          </div>
          <div className="formItem">
            <label>
              评论内容
              <textarea
                rows="3"
                placeholder="请输入评论内容"
                value={content}
                onChange={this.handleChange("content")}></textarea>
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
// 向UI组件传递 addComment更新数据的方法
export default connect(null, { addComment })(AddComment);
