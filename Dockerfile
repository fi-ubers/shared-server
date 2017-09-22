FROM insecurity/node-32bit-x87:latest

# Create app directory
WORKDIR /src/app

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 5000

CMD ["npm", "start"]
