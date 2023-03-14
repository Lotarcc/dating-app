FROM node:latest

RUN mkdir -p /app
WORKDIR /app

COPY ./client /app/client/
WORKDIR /app/client
RUN npm i
RUN ls
RUN npm run build

WORKDIR /app
COPY .env ./
COPY package.json ./
COPY package-lock.json ./
COPY ./server ./server
WORKDIR /app/server
RUN npm i

ENV PORT=8080
CMD ["npm", "run", "start"]