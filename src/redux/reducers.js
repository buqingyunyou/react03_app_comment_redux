import { combineReducers } from "redux";

function comments(preState = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      //1.添加key
      action.data.key = Date.now();
      //2.添加comment到commentsReducer
      return [action.data, ...preState];

    case "REMOVE_COMMENT":
      const comments = preState.filter((item) => {
        return item.key !== action.data;
      });
      // return的变量必须和函数名相同
      return comments;

    default:
      return preState;
  }
}

export default combineReducers({ comments });
