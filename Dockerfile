# Build
FROM node:12 as builder

WORKDIR /app

COPY package.json package-lock.json gatsby-config.js gatsby-node.js /app/

RUN npm install

COPY src/ /app/src/

RUN npm run build

# App
FROM nginx:stable-alpine as app

COPY nginx.conf /etc/nginx/
COPY --from=builder /app/public /www/data
