# node项目使用express.js开发模板

## 本地开发

> 项目依赖mongodb和redis数据库，请自行安装并启动，然后修改`.env.example`文件里相应的内容，最后重命名为`.env`

建议版本

- nodejs大于v10.0.0

```shell
# 安装依赖
npm i
# 本地开发
npm run dev
# 打包
npm run build
# 线上运行
npm run start
```

运行后可以访问http://localhost:4000/api/v1/test?name=express-template

## 项目结构

![image](https://user-images.githubusercontent.com/2918044/63660487-4165aa80-c7e9-11e9-994c-568b8936f2a6.png)

## 依赖

项目依赖以下库，可以在你的程序里直接使用，不用再次安装

- maodou-logger-util 日志库封装
- maodou-redis-util  redis封装
- debug 开发时调试
- @babel/runtime 和@babel/plugin-transform-runtime配套
- core-js 结合@babel/preset-env用于替代@babel/polyfill

其他可能用到的包

- maodou-upload-util 七牛上传的封装
- maodou-wechat-sdk 微信公众号、小程序登录、支付等封装
