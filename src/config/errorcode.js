// 定义返回码 此返回码用于给前台判断
export default {
  success: 200,
  commonError: 100, // 通用
  unauthorized: 401, // 未认证 未登录
  forbidden: 403, // 没有权限
  notfound: 404,
  methodNotAllowed: 405,
  tooManyRequests: 429,
  serverInternalError: 500,
  serviceUnavailable: 503,
  serviceTimeout: 504,
};
