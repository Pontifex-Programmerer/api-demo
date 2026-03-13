const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

// Home page - all books
router.get('/', BookController.getAllBooks);

// Individual book by title
router.get('/books/title/:title', BookController.getBookByTitle);

// Books by author
router.get('/books/author/:author', BookController.getBooksByAuthor);

// Books by genre
router.get('/books/genre/:genre', BookController.getBooksByGenre);

// Books by year
router.get('/books/year/:year', BookController.getBooksByYear);

module.exports = router;