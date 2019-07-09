import express from 'express';
import ErrorCode from '../config/errorcode';
const router = express.Router();

// 测试
router.get('/', async (req, res, next) => {
  const data = req.query;
  // 日志记录 req.logInfo/req.logError
  req.logInfo('test get--', data);
  res.json({ errcode: ErrorCode.success, data });
});

router.post('/', async (req, res) => {
  const data = req.body;
  req.logInfo('test post--', data);
  res.json({ errcode: ErrorCode.success, data });
});

export default router;
