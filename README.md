# Express.js POST Request Body Parsing Issue

This repository demonstrates a common issue encountered when handling POST requests with JSON data in Express.js: the request body is sometimes empty or undefined.

## Bug Description

The provided `bug.js` file contains an Express.js server that attempts to process JSON data sent in a POST request to `/users`.  However, the `req.body` is often empty, leading to unexpected behavior or errors.

## Bug Solution

The `bugSolution.js` shows the fix.  The problem is that you need to tell Express.js to parse the JSON in the request body. 

## How to Reproduce

1. Clone this repository.
2. Run `npm install express` to install Express.js.
3. Run `node bug.js`.
4. Send a POST request to `http://localhost:3000/users` with a JSON payload using a tool like Postman or curl (e.g., `curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe"}' http://localhost:3000/users`).
5. Observe that req.body is empty in the original file, and populated in the solution.

## Solution

The solution involves adding `app.use(express.json());` before any route handlers that expect JSON data. This middleware parses the incoming JSON request body and makes it available as `req.body`. 