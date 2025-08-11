API_CONTAINER_IP=172.20.0.2
API_IMAGE_NAME=contacts-api-js
API_CONTAINER_NAME=$(API_IMAGE_NAME)-container
API_PORT=5000
NETWORK_NAME=contacts-network

build:
	docker build \
		--build-arg API_PORT=$(API_PORT) \
		-t $(API_IMAGE_NAME) .

run:
	docker run \
		--rm \
		-d \
		-p $(API_PORT):$(API_PORT)\
		--net=$(NETWORK_NAME) \
		--ip=$(API_CONTAINER_IP) \
		-v /tmp/contacts.json:/src/db/db.json \
		--name $(API_CONTAINER_NAME) \
		$(API_IMAGE_NAME)

stop:
	docker stop $(API_CONTAINER_NAME)

# More commands in package.json > scripts
