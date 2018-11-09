FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node src/js/app.js
EXPOSE 5000