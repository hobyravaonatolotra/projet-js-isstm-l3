# Node Server App

This project sets up a local HTTP server using Node.js and provides an API endpoint to generate random ideas.

## Project Structure

```
node-server-app
├── server.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the necessary dependencies:

   ```
   npm install
   ```

## Running the Server

To start the server, run the following command:

```
node server.js
```

The server will start and listen on `http://localhost:3000`.

## API Endpoint

### `GET /generate`

- This endpoint returns a random idea from a predefined list.
- The response will include an `id`, the `idea`, and a `timestamp`.

#### Example Response

```json
{
  "id": 1633036800000,
  "idea": "Une application de gestion de potager connectée avec de l'IA.",
  "timestamp": "2023-10-01T12:00:00Z"
}
```

## CORS

The server is configured to allow cross-origin requests, making it accessible from different origins.

## License

This project is open-source and available under the MIT License.