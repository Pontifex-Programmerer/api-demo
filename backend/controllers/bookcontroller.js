const { response } = require("express");

const library = [
  {
    "title": "Dune",
    "author": "Frank Herbert",
    "genre": "Science Fiction",
    "year": 1965
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "year": 1937
  },
  {
    "title": "Foundation",
    "author": "Isaac Asimov",
    "genre": "Science Fiction",
    "year": 1951
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian",
    "year": 1949
  },
  {
    "title": "The Name of the Wind",
    "author": "Patrick Rothfuss",
    "genre": "Fantasy",
    "year": 2007
  },
  {
    "title": "Neuromancer",
    "author": "William Gibson",
    "genre": "Cyberpunk",
    "year": 1984
  },
  {
    "title": "The Martian",
    "author": "Andy Weir",
    "genre": "Science Fiction",
    "year": 2011
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "genre": "Dystopian",
    "year": 1932
  },
  {
    "title": "The Left Hand of Darkness",
    "author": "Ursula K. Le Guin",
    "genre": "Science Fiction",
    "year": 1969
  },
  {
    "title": "Mistborn: The Final Empire",
    "author": "Brandon Sanderson",
    "genre": "Fantasy",
    "year": 2006
  }
]

const getAllBooks = (req, res) => {
    let response;
    response = createResponse({ message: 'Get all books', data: library });
    res.status(response.httpStatus).json(response);
};

const getBookByTitle = (req, res) => {
    let response;
    const { title } = req.params;
    const book = library.find(b => b.title.toLowerCase() === title.toLowerCase());
    if (book) response = createResponse({ message: `Book found: ${book.title}`, data: book });
    else response = createResponse({ httpStatus: 404, message: `Book with title "${title}" not found` });
    res.status(response.httpStatus).json(response);
};

const getBooksByGenre = (req, res) => {
    let response;
    const { genre } = req.params;
    const books = library.filter(b => b.genre.toLowerCase() === genre.toLowerCase());
    if (books.length > 0) response = createResponse({ message: `Books found in genre: ${genre}`, data: books });
    else response = createResponse({ httpStatus: 404, message: `No books found in genre "${genre}"` });
    res.status(response.httpStatus).json(response);
};

const getBooksByAuthor = (req, res) => {
    let response;
    const { author } = req.params;
    const books = library.filter(b => b.author.toLowerCase() === author.toLowerCase());
    if (books.length > 0) response = createResponse({ message: `Books found by author: ${author}`, data: books });
    else response = createResponse({ httpStatus: 404, message: `No books found by author "${author}"` });
    res.status(response.httpStatus).json(response);
};

const getBooksByYear = (req, res) => {
    let response;
    const { year } = req.params;
    const books = library.filter(b => b.year === parseInt(year));   
    if (books.length > 0) response = createResponse({ message: `Books found from year: ${year}`, data: books });
    else response = createResponse({ httpStatus: 404, message: `No books found from year "${year}"` });
    res.status(response.httpStatus).json(response);
};

function createResponse({ httpStatus = 200, message, data = null } = {}) {
    return {
        httpStatus,
        message,
        data
    };
}

module.exports = {
    getAllBooks,
    getBookByTitle,
    getBooksByGenre,
    getBooksByAuthor,
    getBooksByYear
};