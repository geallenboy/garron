FROM nginx:latest

LABEL author="garron" app="newedao" version="1.0"

# 时区修正 
RUN rm -f /etc/localtime \
&& ln -sv /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
&& echo "Asia/Shanghai" > /etc/timezone

#tar
ADD *.tar.gz /root/dist/

# 授权
RUN chmod -R 755 /root/*

#conf文件
COPY nginx.conf /etc/nginx/nginx.conf