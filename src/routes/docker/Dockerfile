# Step 1: Use Node base image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all source code
COPY . .

# Step 6: Expose port
EXPOSE 8080

# Step 7: Run app
CMD ["npm", "start"]
