# syntax=docker/dockerfile:1

# ---- build: compile the static bundle ----
FROM node:16-alpine AS build

# VUE_APP_* values are compiled into the bundle, so the API endpoint is a build-time argument.
ARG VUE_APP_ENDPOINT=http://localhost:8000
ENV VUE_APP_ENDPOINT=${VUE_APP_ENDPOINT}

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

COPY . .
RUN yarn build

# ---- runtime: serve the bundle with nginx ----
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
