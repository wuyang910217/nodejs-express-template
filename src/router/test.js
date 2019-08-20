import express from 'express';
import ErrorCode from '../constant/code';
import userAuth from '../middleware/userAuth';
const router = express.Router();

// 返回类型
// 正常返回 {errcode: 200, errmsg: '', data: {}}
// 错误返回 {errcode: xxx, errmsg: 'xxx'}

// 测试
router.get('/', async (req, res, next) => {
  const data = req.query;
  // 日志记录 req.logInfo/req.logError
  req.logInfo('test get--', data);
  res.json({
    errcode: ErrorCode.success,
    data: { ...data, intro: '这是访问接口的例子' },
  });
});

// 测试 带用户验证
router.get('/auth', userAuth(), async (req, res, next) => {
  const data = req.query;
  // 日志记录 req.logInfo/req.logError
  req.logInfo('test get--', data);
  res.json({
    errcode: ErrorCode.success,
    data: { ...data, intro: '这是访问用户验证接口的例子' },
  });
});

router.post('/', async (req, res) => {
  const data = req.body;
  req.logInfo('test post--', data);
  res.json({ errcode: ErrorCode.success, data });
});

export default router;
