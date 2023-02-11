FROM node:boron

RUN mkdir -p /src/app
WORKDIR /src/app

RUN git clone https://github.com/showeimer/2048.git .

RUN npm install

EXPOSE 3001

CMD ["node", "app.js"]
