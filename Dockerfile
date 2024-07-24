# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the production build
RUN npm install -g serve

# Set the command to run the app with SPA support
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port 3000 to the outside world
EXPOSE 3000
