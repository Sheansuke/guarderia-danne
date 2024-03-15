FROM node:18-alpine as base
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base as builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build


FROM base as production
WORKDIR /app

ENV NODE_ENV=production \
    SANITY_PROJECT_ID=9k7dl08d \
    SANITY_DATASET=production \
    SANITY_API_VERSION=2023-05-03 \
    SANITY_AUTH_KEY=skmIn6jSOq9haYRPUaHemNZvayHaqXsAF56CvqFED9Pgmd4Sh2RrHCNlJEsmzm89MY7MIeqyc8CoHz9jzOsqU4ZIUp6XKGC1fZPcXsyqYq1ZFPRYB2Lx3WhX1Id85XGFbsZtn3jtHahGu4VBIHZdO6iQMPmyc4X8FEy9f9HmyQMbb5iVrG41
 

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs


COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD npm start