import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/index';
/**
 * 生成jwt token
 * @export
 * @param {object} info 需要保存的信息 如userId,openId等
 * @param {string} [expires=''] 默认有效期 60天
 * @returns
 */
export function genToken(info, expires = '60d') {
  if (isEmptyObject(info)) throw new Error('参数必须为object类型且不为空');
  return jwt.sign(info, jwtSecret, {
    expiresIn: expires,
  });
}

/**
 * 验证token 注意处理错误
 * @export
 * @param {*} token
 * @returns
 */
export function verifyToken(token) {
  if (!token) throw new Error('缺少必要参数');
  return jwt.verify(token.replace('Bearer ', ''), jwtSecret);
}
