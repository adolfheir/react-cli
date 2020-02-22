export const baseUrl = 'http://127.0.0.1:3002/';

const Api = {
  list: 'trajectorys.json',
  // 暂时没用到，以后用正则过滤一层才能用
  detail: '${dirName}/trajectory.json', // eslint-disable-line
};

// 加base
Object.keys(Api).forEach(key => {
  Api[key] = `${baseUrl}${Api[key]}`;
});

export default Api;
