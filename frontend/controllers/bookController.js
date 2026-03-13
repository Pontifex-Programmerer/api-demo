const BookModel = require('../models/bookModel');

class BookController {
    static async getAllBooks(req, res) {
        const result = await BookModel.getAllBooks();

        if (result.success) {
            res.render('index', {
                books: result.data,
                title: 'All Books'
            });
        } else {
            res.render('error', {
                error: 'Failed to load books from the server',
                title: 'Server Error'
            });
        }
    }

    static async getBookByTitle(req, res) {
        const { title } = req.params;
        const result = await BookModel.getBookByTitle(title);

        if (result.success) {
            res.render('book', {
                book: result.data,
                title: result.data.title
            });
        } else {
            const errorMessage = result.status === 404
                ? `Book "${title}" not found`
                : 'Failed to load book details';
            res.render('error', {
                error: errorMessage,
                title: 'Book Not Found'
            });
        }
    }

    static async getBooksByAuthor(req, res) {
        const { author } = req.params;
        const result = await BookModel.getBooksByAuthor(author);

        if (result.success) {
            res.render('author', {
                books: result.data,
                author: author,
                title: `Books by ${author}`
            });
        } else {
            const errorMessage = result.status === 404
                ? `No books found by author "${author}"`
                : 'Failed to load books by author';
            res.render('error', {
                error: errorMessage,
                title: 'Author Not Found'
            });
        }
    }

    static async getBooksByGenre(req, res) {
        const { genre } = req.params;
        const result = await BookModel.getBooksByGenre(genre);

        if (result.success) {
            res.render('genre', {
                books: result.data,
                genre: genre,
                title: `Books in ${genre}`
            });
        } else {
            const errorMessage = result.status === 404
                ? `No books found in genre "${genre}"`
                : 'Failed to load books by genre';
            res.render('error', {
                error: errorMessage,
                title: 'Genre Not Found'
            });
        }
    }

    static async getBooksByYear(req, res) {
        const { year } = req.params;
        const result = await BookModel.getBooksByYear(year);

        if (result.success) {
            res.render('year', {
                books: result.data,
                year: year,
                title: `Books from ${year}`
            });
        } else {
            const errorMessage = result.status === 404
                ? `No books found from year "${year}"`
                : 'Failed to load books by year';
            res.render('error', {
                error: errorMessage,
                title: 'Year Not Found'
            });
        }
    }
}

module.exports = BookController;