FROM node:14-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx nuxt build

CMD [ "npx", "nuxt", "start" ]

# FROM node:14-alpine AS runner

# WORKDIR /app

# COPY --from=builder /app/.nuxt ./.nuxt
# COPY --from=builder /app/nuxt.config.js ./nuxt.config.js
# COPY --from=builder /app/package.json ./package.json

# RUN npm install -g nuxt@2

# CMD ["nuxt", "start"]
