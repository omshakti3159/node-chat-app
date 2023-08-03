#!/bin/bash

# Set the path to the data file on your local machine
DATA_FILE="./src/static/users.json"

# Set the container name or ID of your MongoDB container
CONTAINER_NAME="task-rest-api-mongo-1"

# Set the name of the MongoDB database and collection where you want to import the data
DATABASE_NAME="db"
COLLECTION_NAME="profiles"

# Step 1: Copy the data file to the MongoDB container
docker cp $DATA_FILE $CONTAINER_NAME:/data.json

# Step 2: Execute the mongoimport command inside the container
docker exec $CONTAINER_NAME mongoimport --db $DATABASE_NAME --collection $COLLECTION_NAME --file /data.json --jsonArray --parseGrace "skip"

chmod +x importDb.sh