FROM node:6

# Create app directory
WORKDIR /src/app

# Install app dependencies
COPY package.json .

RUN npm install 

# Bundle app source
COPY . .

EXPOSE 5000

CMD ["npm", "start"]
