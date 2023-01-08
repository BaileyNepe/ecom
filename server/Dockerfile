FROM node:18.12-alpine3.16 AS server

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . /app/

EXPOSE 5001

CMD ["npm", "run", "dev"]