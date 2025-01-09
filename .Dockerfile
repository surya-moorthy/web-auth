# Step 1: Build the React app with pnpm
FROM node:20-alpine AS build

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only React's package.json and pnpm-lock.yaml
COPY ./frontend/package.json ./frontend/pnpm-lock.yaml ./frontend/

# Install dependencies for the React app
WORKDIR /app/frontend
RUN pnpm install

# Copy the rest of the React app files and build it
COPY ./frontend ./
RUN pnpm run build

# Step 2: Set up the Node.js backend
FROM node:20-alpine

WORKDIR /app

# Copy backend's package.json and package-lock.json
COPY ./backend/package.json ./backend/package-lock.json ./backend/

# Install dependencies for the backend
WORKDIR /app/backend
RUN npm install

# Copy the React build files from the previous stage
COPY --from=build /app/frontend/build ./frontend/build

# Copy the rest of the backend files
COPY ./backend ./

EXPOSE 3000

# Start the backend server
CMD ["node", "index.js"]
