FROM node:4

COPY . /

RUN npm install

RUN npm start
