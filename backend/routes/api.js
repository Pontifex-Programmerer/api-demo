const router = require('express').Router();

const { getAllBooks, getBookByTitle, getBooksByAuthor, getBooksByGenre, getBooksByYear } = require('../controllers/bookcontroller');

router.get('/books', getAllBooks);
router.get('/books/title/:title', getBookByTitle);
router.get('/books/author/:author', getBooksByAuthor);
router.get('/books/genre/:genre', getBooksByGenre);
router.get('/books/year/:year', getBooksByYear);

module.exports = router;