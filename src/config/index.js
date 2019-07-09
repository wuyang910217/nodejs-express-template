import Dotenv from 'dotenv';
// 注入环境变量
Dotenv.config();

export const isDev = process.env.NODE_ENV === 'development';

export const port = process.env.APP_PORT || 4000;

export const logLevel = 'info'; // info error

// 短信服务商配置
export const smsConfig = {
  // 云片网
  yunpan: {
    url: process.env.YUNPAN_URL,
    apiKey: process.env.YUNPAN_API_KEY,
  },
};

// redis配置
export const redisConfig = {
  name: 'base-redis',
  host: isDev ? 'localhost' : process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: isDev ? '' : process.env.REDIS_PASSWORD,
};

// session配置
export const sessionConfig = {
  name: process.env.SESSION_NAME || 'maodou-session',
  secret: process.env.SESSION_SECRET || 'maodou',
  saveUninitialized: false,
  resave: false,
  cookie: { maxAge: 15 * 60 * 1000 },
};

export const rateLimitConfig = {
  windowMs: 60 * 1000, // 1 minutes
  max: 200, // limit each IP to 100 requests per windowMs
};
