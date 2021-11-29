FROM node:17-alpine

RUN mkdir /opt/app
WORKDIR /opt/app

COPY package.json /opt/app/
RUN npm install

COPY . /opt/app

CMD ["npm", "start"]