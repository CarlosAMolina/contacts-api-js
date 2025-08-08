FROM node:22.14.0-slim
COPY package.json package-lock.json /
RUN npm ci --omit=dev
COPY index.js /
COPY src /src
ARG PORT
ENV API_PORT=$PORT
EXPOSE $PORT
CMD ["npm", "start"]
#ENTRYPOINT ["tail", "-f", "/dev/null"]
