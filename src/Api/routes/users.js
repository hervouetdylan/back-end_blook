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

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;

    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});


module.exports = router;