/* eslint-disable */

export const downLoad = (path) => {
  const a = document.createElement('a'); // 创建a标签
  a.setAttribute('href', path);// href链接
  a.click();
};
