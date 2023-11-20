# 部署说明
## 构建打包命令

```bash

# 输出目录在vue.config.js中设置
# 本项目打包输出路径为./nginx/wwww/
npm run build:prod
```

## docker部署
```bash

# 拉取nginx镜像
docker pull nginx:1.17

#启动容器 开启nginx服务
# 将容器名设置为 nginxtest
# 将服务端口号设置为 3001
# 将./nginx 路径下的三个文件夹挂载到容器中
# -- www   页面静态资源
# -- conf  nginx服务配置
# -- logs  服务日志



 docker run -d -p 3001:80 --name nginxtest -v {yourpath}/nginx/www:/usr/share/nginx/html -v {yourpath}/nginx/conf/nginx.conf:/etc/nginx.nginx.conf -v {yourpath}/nginx/logs:/var/log/nginx nginx:1.17


```
