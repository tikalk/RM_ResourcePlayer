FROM node:4

ADD * /

RUN npm install
RUN npm start
