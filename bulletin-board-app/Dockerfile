FROM node:current-slim

WORKDIR /usr/src/app

# Copy package.json first to install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project files AFTER installing dependencies
COPY . .

# Expose port 8080 for the container
EXPOSE 8080

# Start the application
CMD [ "npm", "start" ]
