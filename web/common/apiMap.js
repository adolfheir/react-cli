export const baseUrl = 'http://127.0.0.1:3002/';

const Api = {
  list: 'list',
};

// 加base
Object.keys(Api).forEach(key => {
  Api[key] = `${baseUrl}${Api[key]}`;
});

export default Api;
