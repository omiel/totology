FROM iojs

WORKDIR /app
ADD . /app

RUN npm install -g gulp
RUN npm install -g bower

# Expose the ports that your app uses. In Example:
EXPOSE 3000
