FROM node:4

COPY package.json /

RUN npm install

COPY . /

RUN npm start
