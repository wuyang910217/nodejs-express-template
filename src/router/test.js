import express from 'express';
import ErrorCode from '../config/errorcode';
import { Logger } from 'maodou-logger-util';
const router = express.Router();

// 测试
router.get('/', async (req, res, next) => {
  const data = req.query;
  // 日志记录
  // 推荐
  // req.logInfo
  // req.logError
  req.logInfo('query--', data);
  req.logError('query--', data);
  // 不推荐使用Logger.LoggerInfo
  Logger.LoggerInfo('query--', data);
  res.json({ errcode: ErrorCode.success, data });
});

router.post('/', async (req, res) => {
  const data = req.body;
  res.json({ errcode: ErrorCode.success, data });
});

export default router;
