import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers";

// 创建store对象（根据环境：开发环境/生产环境）
let middleware = applyMiddleware(thunk);
if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(applyMiddleware(thunk));
}

const store = createStore(reducers, middleware);

export default store;
