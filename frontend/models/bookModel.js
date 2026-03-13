const axios = require('axios');

const API_BASE_URL = 'http://localhost:3000/api';

class BookModel {
    static async getAllBooks() {
        try {
            const response = await axios.get(`${API_BASE_URL}/books`);
            return {
                success: true,
                data: response.data.data,
                message: response.data.message
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                status: error.response?.status
            };
        }
    }

    static async getBookByTitle(title) {
        try {
            const response = await axios.get(`${API_BASE_URL}/books/title/${encodeURIComponent(title)}`);
            return {
                success: true,
                data: response.data.data,
                message: response.data.message
            };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || error.message,
                status: error.response?.status
            };
        }
    }

    static async getBooksByAuthor(author) {
        try {
            const response = await axios.get(`${API_BASE_URL}/books/author/${encodeURIComponent(author)}`);
            return {
                success: true,
                data: response.data.data,
                message: response.data.message
            };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || error.message,
                status: error.response?.status
            };
        }
    }

    static async getBooksByGenre(genre) {
        try {
            const response = await axios.get(`${API_BASE_URL}/books/genre/${encodeURIComponent(genre)}`);
            return {
                success: true,
                data: response.data.data,
                message: response.data.message
            };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || error.message,
                status: error.response?.status
            };
        }
    }

    static async getBooksByYear(year) {
        try {
            const response = await axios.get(`${API_BASE_URL}/books/year/${year}`);
            return {
                success: true,
                data: response.data.data,
                message: response.data.message
            };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || error.message,
                status: error.response?.status
            };
        }
    }
}

module.exports = BookModel;