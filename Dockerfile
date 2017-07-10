FROM node:boron

COPY package.json /

RUN npm install

RUN npm start
