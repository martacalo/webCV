FROM ubuntu:22.04

RUN apt update
RUN apt install nginx -y

ADD . /var/www/html

CMD ["nginx", "-g", "daemon off;"]