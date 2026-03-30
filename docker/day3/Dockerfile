# Stage 1: The Builder (The Kitchen)
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: The Production Image (The Plate)
FROM node:18-alpine AS production
WORKDIR /app
# We ONLY grab the built files from the previous stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm install --only=production

EXPOSE 3000
CMD ["npm", "start"]
