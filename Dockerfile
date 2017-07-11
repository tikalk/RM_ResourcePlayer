FROM node:boron

COPY . /

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
