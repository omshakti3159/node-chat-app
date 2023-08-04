## Pre-requisite

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

## Project structure demonstration

[![Watch the video for Project folder structure 1]](https://www.loom.com/share/104a02f47eae43bd96e09fde92ab6684)
[![Watch the video for app startup and Auth API 2]](https://www.loom.com/share/4eca2e556906454d91ca5a97302add28)
[![Watch the video for socket.io and chat app 3]](https://www.loom.com/share/7b0404c1d5424589af1a83fea88ece14)
[![Watch the video for how to use API and chat app]](https://www.loom.com/share/ac2a8395d8f14741a4dbd63602587683)
