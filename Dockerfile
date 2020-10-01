FROM node:lts-alpine

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "app.js"]
