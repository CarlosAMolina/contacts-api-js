API_IMAGE_NAME=contacts-api-js
API_CONTAINER_NAME=$(API_IMAGE_NAME)-container
API_PORT=5000

build:
	docker build --build-arg API_PORT=$(API_PORT) -t $(API_IMAGE_NAME) .

run:
	docker run --rm -d --name $(API_CONTAINER_NAME) -p $(API_PORT):$(API_PORT) $(API_IMAGE_NAME)

stop:
	docker stop $(API_CONTAINER_NAME)

# More commands in package.json > scripts
