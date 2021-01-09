FROM node:alpine

WORKDIR /usr/src/bill_generator

COPY package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 4193

CMD ["npm", "start"]