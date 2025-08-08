API_IMAGE_NAME=contacts-api-js
API_CONTAINER_NAME=$(API_IMAGE_NAME)-container

build:
	docker build -t $(API_IMAGE_NAME) .

run:
	docker run --rm -d --name $(API_CONTAINER_NAME) -p 4000:4000 $(API_IMAGE_NAME)

stop:
	docker stop $(API_CONTAINER_NAME)

# More commands in package.json > scripts
