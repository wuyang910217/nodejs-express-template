import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { jwtSecret } from '../config/index';

function isEmptyObject(info) {
  return typeof info !== 'object' || Object.keys(info).length === 0;
}

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

// hash原始密码
export async function genPwd(rawPwd, saltRounds = 10) {
  if (!rawPwd) throw new Error('缺少必要参数');
  const hashedPwd = await bcrypt.hash(rawPwd, saltRounds);
  return hashedPwd;
}

// 对比密码
export async function comparePwd(rawPwd, hashedPwd) {
  const match = await bcrypt.compare(rawPwd, hashedPwd);
  return match;
}
