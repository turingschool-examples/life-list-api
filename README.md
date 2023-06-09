# Life List API

This API can keep track of all the birds you've seen. Here are the available endpoints:

## Setup Instructions

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
| GET | /birds | None | `{ birds: [ { id: 1, birdName: "Horned Lark", date: "05-19-2023", place: "On my head" }, ... ] }` |
| POST | /birds | `{ birdName: <String>, date: <String>, place: <String> }` | `{ id: <Number>, { birdName: <String>, date: <String>, place: <String> }` |

**Note:** The POST request needs a header of `Content-Type: application/json`.