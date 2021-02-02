FROM node:10.13.0
COPY . /app
WORKDIR /app
RUN npm i
CMD npm start
