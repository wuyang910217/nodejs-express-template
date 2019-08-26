import TestAPI from './test';
import AdminAPI from './admin';

// 定义api路由前缀
export const api = {
  prefix: '/api/v1',
  test: '/test',
  admin: '/admin', // 嵌套（二级）路由
};

export default app => {
  app.use(api.prefix + api.test, TestAPI);
  app.use(api.prefix + api.admin, AdminAPI);
};
