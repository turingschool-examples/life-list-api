# Life List API

This API can keep track of all the birds you've seen. This repo is meant to be paired with the [Life List](https://github.com/turingschool-examples/life-list-fe) frontend.

## Set Up Instructions

Clone down the repo and change into the repo's directory.

```bash
# Install library dependencies, run:
npm install

# Start the server to use the endpoints, run:
npm start
```

## Endpoint Documentation

**Base URL:** http://localhost:3001/api/v1

| **VERB** | **URL** | **REQUEST BODY** | **SAMPLE RESPONSE** |
| -------- | ------- | ---------------- | ------------------- |
| GET | /birds | None | `{ birds: [ { id: 1, birdName: "Horned Lark", date: "2024-05-20", place: "On my head" }, ... ] }` |
| POST | /birds | `{ birdName: <String>, date: <String>, place: <String> }` | `{ id: <Number>, birdName: <String>, date: <String>, place: <String> }` |

**Note:** The POST request needs a header of `Content-Type: application/json`.
