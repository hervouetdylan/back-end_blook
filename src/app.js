// app.js
const express = require('express');
const app = express();

const userRoutes = require('./Api/routes/users');

app.use('/users', userRoutes);



module.exports = app;