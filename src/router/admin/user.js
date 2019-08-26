import express from 'express';
import ErrorCode from '../../constant/code';
const router = express.Router();

// 完整的地址为http://localhost:4000/api/v1/admin/user
router.get('/', async (req, res, next) => {
  res.json({
    errcode: ErrorCode.success,
    data: { text: 'admin下的用户接口' },
  });
});

export default router;
