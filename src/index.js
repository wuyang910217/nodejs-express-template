import express from 'express';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import Dotenv from 'dotenv';
import { Redis } from 'maodou-redis-util';
import { Logger, LogRequest } from 'maodou-logger-util';
import { port, isDev, logLevel, redisConfig } from './config/';
import RouterInit from './router/';

// 注入环境变量
Dotenv.config();

// 初始化logger
Logger.initLogger(logLevel);

// 连接redis 需要提供一个名字
Redis.newConnect('connect-name', redisConfig);

const app = express();
// 加载中间件
app.use(cors());
app.use(compression());
// 如果不需要记录详细信息 请设置为LogRequest(false) 但是不要删除
app.use(LogRequest());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// 加载api路由
RouterInit(app);

// 统一处理错误
app.use((err, req, res, next) => {
  res.json({ errcode: err.code || 100, errmsg: err.message });
});

// 不匹配的路由 返回404
app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(port, async () => {
  Logger.LoggerInfo(`API server is running at http://localhost:${port}`);
});
