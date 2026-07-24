FROM node:20-slim AS base

RUN apt-get update && apt-get install -y openssl curl && rm -rf /var/lib/apt/lists/*

FROM base AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOME=/tmp

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 --ingroup nodejs nodejs

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

RUN mkdir -p uploads

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3333

ENV PORT=3333

RUN chown -R nodejs:nodejs /app

USER nodejs

ENTRYPOINT ["/bin/sh", "/entrypoint.sh"]