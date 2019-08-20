import { verifyToken } from '../util';
import { findUserById } from '../model/user';
import ErrorCode from '../constant/code';

// 用户请求验证中间件
export default (flag = true) => {
  return async (req, res, next) => {
    if (!flag) return next();

    const token = req.headers.authorization;
    req.logInfo('执行中间件：验证用户token ', { token });

    try {
      if (!token || token == 'Bearer null') throw new Error('token不存在');
      const decoded = verifyToken(token);
      const user = await findUserById(decoded.userId, { _id: 1 });
      if (user && user._id) {
        req.userId = decoded.userId;
        req.openId = decoded.openId || '';
        next();
      } else {
        throw new Error('用户不存在 重新登录');
      }
    } catch (err) {
      req.logError(err.message || '用户验证失败', err);
      res.json({
        errcode: ErrorCode.unauthorized,
        errmsg: err.message || '用户验证失败',
      });
    }
  };
};
