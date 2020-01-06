#build stage
FROM node AS builder
WORKDIR /workdir
COPY . .
RUN yarn build

#final stage
FROM nginx
COPY --from=builder /workdir/build /usr/share/nginx/html