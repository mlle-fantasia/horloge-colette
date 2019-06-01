FROM nginx:alpine

RUN mkdir /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
COPY . /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
