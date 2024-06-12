# Dockerfile for Node.js server
FROM node:18

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

EXPOSE 8000

CMD ["yarn", "start"]
