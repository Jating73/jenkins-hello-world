FROM node

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 4545

CMD ["npm", "start"]