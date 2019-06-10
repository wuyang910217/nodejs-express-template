import TestAPI from './test';

// 定义api路由前缀
export const api = {
  prefix: '/api/v1',
  test: '/test',
};

export default app => {
  app.use(api.prefix + api.test, TestAPI);
};
