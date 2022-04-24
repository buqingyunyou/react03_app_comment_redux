// 分别暴露
export function addComment(comment){
  return {
    type:"ADD_COMMENT", //方法名
    data:comment // 参数
  }
}

export function removeComment(key){
  return {
    type:"REMOVE_COMMENT",
    data:key
  }
}