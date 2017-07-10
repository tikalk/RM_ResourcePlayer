FROM node:4

ADD package.json /

RUN npm install
RUN npm build
