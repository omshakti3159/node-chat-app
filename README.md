## prerequisite

- Docker

## Setup

- npm i
- sudo chmod +x importDb.sh (make this file executable to import the database backup)
- docker compose up

## Postman collection

- Postman collection JSON file located inside postman-collection folder (postman-collection/task test app api.postman_collection.json)
- collection can be directly imported in postman
- All the neccessary variable are already set

## How to use API's

- first you need to run docker compose up to boot up the app
- make importDb.sh executable by running (sudo chmod +x importDb.sh)
- Run importDb.sh (./importDb.sh)

### how to request API

- first you need to register a user (Register user request)
- Login with created user creads (Login request)
- Get prfiles that are paginated and sortable (get profiles request)

## How to use chat app

- Get a token by logging in with a user
- Open browser and go to http://localhost:3000/chat?token=your_login_token_replace_here
- open a second window and go to same URL but with different user token
