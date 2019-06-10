export const isDev = process.env.NODE_ENV === 'development';

export const port = 4000;

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
  host: isDev ? 'localhost' : process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: isDev ? '' : process.env.REDIS_PASSWORD,
};
