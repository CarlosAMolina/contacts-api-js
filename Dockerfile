FROM node:22.14.0-slim
ARG PORT
ENV API_PORT=$PORT
EXPOSE $PORT
COPY package.json package-lock.json /
RUN npm ci --omit=dev
COPY index.js /
COPY src /src
CMD ["npm", "start"]
#ENTRYPOINT ["tail", "-f", "/dev/null"]
