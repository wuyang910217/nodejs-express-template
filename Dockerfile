# 此基础镜像已包含上海时区
FROM hub.tencentyun.com/maodou_hub/maodou-kid:node10.15-slim

#创建app目录,保存我们的代码
RUN mkdir -p /usr/src/node
#设置工作目录
WORKDIR /usr/src/node

# 利用缓存
COPY package.json package-lock.json ./

#安装程序依赖,利用taobao的npm源
RUN npm config set registry https://registry.npm.taobao.org
RUN npm config set disturl https://npm.taobao.org/dist
RUN npm install
# RUN npm ci --only=production

ENV TZ=Asia/Shanghai
#复制所有文件到 工作目录。
COPY . .

#暴露container的端口
EXPOSE 4000

#运行命令
RUN npm run build

CMD ["npm", "run", "start"]
