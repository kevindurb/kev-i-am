FROM node:latest

RUN npm install -g -s --no-progress yarn nodemon

RUN mkdir -p /usr/src
ADD package.json /usr/src/package.json
ADD yarn.lock /usr/src/yarn.lock
RUN cd /usr/src && yarn install

WORKDIR /usr/src
ADD . /usr/src

EXPOSE 3000

CMD ["nodemon", "-L", "/usr/src"]
