# Book Library Application

A full-stack book library application with separate frontend and backend projects.

## Project Structure

```
book-library/
├── backend/          # Express.js API server
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/         # Express.js web frontend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── views/
│   ├── frontendserver.js
│   └── package.json
└── README.md
```

## Getting Started

### Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on http://localhost:3000

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on http://localhost:3001

## Architecture

- **Backend**: REST API built with Express.js
- **Frontend**: MVC web application built with Express.js and EJS templates
- **Communication**: Frontend makes HTTP requests to backend API

## Features

- View all books in the library
- Search books by title, author, genre, or publication year
- Responsive web interface
- Clean separation of concerns with MVC architecture