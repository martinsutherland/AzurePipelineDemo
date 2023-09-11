FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm init playwright@latest

COPY . .

EXPOSE 3000

CMD ["npm", "start"]