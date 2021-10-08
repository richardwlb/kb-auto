FROM node:12-alpine

# ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . . 

RUN echo $(pwd)

# RUN echo $(ls)

CMD [ "yarn", "run", "prod" ]