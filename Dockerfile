FROM node:boron

COPY . /

RUN npm install

RUN npm start
