// 简单封装log 防eslint 报错
export default {
  error: (v, title) => { console.log("error", title || "", v) },// eslint-disable-line
  warn: (v, title) => { console.log("warn", title || "", v) },// eslint-disable-line
  log: (v, title) => { console.log("log", title || "", v) }// eslint-disable-line
};
