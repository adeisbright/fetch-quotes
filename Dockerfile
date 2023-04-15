#The instructions in this file will be used by docker to build an image 

FROM node:16-alpine 
RUN echo 'I am testing out working with dockerfile'
WORKDIR /app
COPY package*.json ./ 
COPY . . 
RUN npm install 
ENV key=value
EXPOSE 3800 
CMD ["node" , "/dist/src/index.js"]

