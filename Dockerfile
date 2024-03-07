FROM node:18-alpine AS builder

WORKDIR /usr/app

COPY build/ ./

EXPOSE 3000

CMD ["npx", "serve", "-s", "."]
