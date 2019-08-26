import mongoose from 'mongoose';
import { mongoUrl } from '../config';
import { Logger } from 'maodou-logger-util';

const LoggerError = Logger.LoggerError;
const LoggerInfo = Logger.LoggerInfo;

// 连接MongoDB, 在生产环境应该禁用autoIndex，因为会造成性能问题
mongoose.connect(mongoUrl, {
  config: { autoIndex: false },
  useNewUrlParser: true,
});

// MongoDB连接成功后回调，这里仅输出一行日志
mongoose.connection.on('connected', function() {
  LoggerInfo('Mongoose default connection open to ' + mongoUrl);
});

// MongoDB连接出错后回调，这里仅输出一行日志
mongoose.connection.on('error', function(err) {
  LoggerError('Mongoose default connection error: ' + err);
});

// MongoDB连接断开后回调，这里仅输出一行日志
mongoose.connection.on('disconnected', function() {
  LoggerInfo('Mongoose default connection disconnected');
});

// 当前进程退出之前关闭MongoDB连接
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    LoggerInfo('Mongoose default connection closed through app termination');
    process.exit(0); //eslint-disable-line
  });
});

export default mongoose;
