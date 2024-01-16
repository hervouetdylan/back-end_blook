const express = require('express');
const router = express.Router();

router.get('/test', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /Users'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /Users'
    });
});

module.exports = router;