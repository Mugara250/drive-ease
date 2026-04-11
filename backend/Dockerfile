FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache openssl ca-certificates && update-ca-certificates
ENV PRISMA_SKIP_POSTINSTALL_GENERATE=1
ENV PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1

FROM base AS development
COPY package*.json ./
COPY prisma ./prisma
RUN npm install --ignore-scripts
COPY . .
RUN sh -c 'n=0; until [ "$n" -ge 3 ]; do npx prisma generate && break; n=$((n+1)); echo "prisma generate failed, retry $n/3"; done; [ "$n" -lt 3 ]'
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

FROM base AS build
COPY package*.json ./
COPY prisma ./prisma
RUN npm ci --ignore-scripts
COPY . .
RUN sh -c 'n=0; until [ "$n" -ge 3 ]; do npx prisma generate && break; n=$((n+1)); echo "prisma generate failed, retry $n/3"; done; [ "$n" -lt 3 ]'
RUN npm run build

FROM node:22-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
ENV PRISMA_SKIP_POSTINSTALL_GENERATE=1
ENV PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1
COPY package*.json ./
COPY prisma ./prisma
RUN npm ci --omit=dev --ignore-scripts
RUN sh -c 'n=0; until [ "$n" -ge 3 ]; do npx prisma generate && break; n=$((n+1)); echo "prisma generate failed, retry $n/3"; done; [ "$n" -lt 3 ]'
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main"]
