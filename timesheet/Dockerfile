FROM keymetrics/pm2:latest-alpine AS base
ENV NODE_ENV=development
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install

FROM base as dev
RUN npm i -g pm2
COPY config/ecosystem.config.dev.js ./ecosystem.config.js
CMD pm2-dev ecosystem.config.js --watch

FROM base AS builder
COPY gulpfile.js tsconfig.json ./
CMD node_modules/.bin/gulp dev

FROM builder as prod_builder
ADD src ./src
RUN node_modules/.bin/gulp build

FROM base as prod
ENV NODE_ENV=production
RUN npm install --only=production
COPY --from=prod_builder /app/dist ./dist
COPY config/ecosystem.config.prod.js ./ecosystem.config.js
CMD pm2-runtime ecosystem.config.js
