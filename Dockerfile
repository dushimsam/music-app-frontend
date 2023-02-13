FROM node:14.5.0-alpine as builder
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install 
COPY . .
RUN npm run build


EXPOSE 3000

CMD ["npm", "start"]