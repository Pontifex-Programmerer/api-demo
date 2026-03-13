# Book Library Backend

This is the backend API server for the book library application.

## Installation

```bash
cd backend
npm install
```

## Running

```bash
npm start
```

The server will run on http://localhost:3000

## API Endpoints

- `GET /api/books` - Get all books
- `GET /api/books/title/:title` - Get book by title
- `GET /api/books/author/:author` - Get books by author
- `GET /api/books/genre/:genre` - Get books by genre
- `GET /api/books/year/:year` - Get books by year