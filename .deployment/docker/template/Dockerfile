FROM node:20.0-alpine AS dependencies

RUN npm cache clean --force
RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /var/www/raw
COPY --chown=node . .

RUN npm ci

COPY .deployment/docker/template/config/nginx.conf /var/www/nginx/nginx.conf
COPY .deployment/docker/template/config/sites-available/default.conf /var/www/nginx/default.conf
COPY .deployment/docker/template/config/common.conf /var/www/nginx/common.conf
