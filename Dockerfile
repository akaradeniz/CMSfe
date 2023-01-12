FROM node:latest as build
COPY ./ /build
WORKDIR /build
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /build/dist/dockerize-fe/ /usr/share/nginx/html


