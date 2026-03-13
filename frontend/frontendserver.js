const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = 3001;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.render('error', {
        error: 'Something went wrong on the server',
        title: 'Server Error'
    });
});

// 404 handler
app.use((req, res) => {
    res.render('error', {
        error: 'Page not found',
        title: '404 - Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`Frontend server is running on http://localhost:${port}`);
});
