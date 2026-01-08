<<<<<<< HEAD
# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Define build arguments
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

=======
# Build Stage
FROM node:18-alpine AS build

WORKDIR /app

>>>>>>> f0044c4433d58b6d27cf1b70d793ae3f0f49f5ea
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

<<<<<<< HEAD
# Production stage
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
=======
# Serve Stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config
>>>>>>> f0044c4433d58b6d27cf1b70d793ae3f0f49f5ea
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
