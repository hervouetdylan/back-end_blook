// app.js
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev')); // logs requests to the console
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// CORS error handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow access from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Which headers can be sent along with the request
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); // Which methods can be used
        return res.status(200).json({});
    }
    next();
});

const userRoutes = require('./Api/routes/users');
const orderRoutes = require('./Api/routes/orders');

// Routes which should handle requests
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');

    error.status = 404;

    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);

    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;