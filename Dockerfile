FROM node:22.14.0-slim
EXPOSE 4000
COPY package.json package-lock.json /
RUN npm ci --omit=dev
COPY index.js /
COPY src /src
CMD ["npm", "start"]
#ENTRYPOINT ["tail", "-f", "/dev/null"]
