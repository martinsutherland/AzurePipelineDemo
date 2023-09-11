FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

RUN npx playwright install --with-deps

COPY . .

EXPOSE 3000

CMD ["npm", "start"]