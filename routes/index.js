const express = require('express');
const router = express.Router();

// Define the route for the root URL
router.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++;
    } else {
        req.session.views = 1;
    }
    
    res.send(`Hello, Express! You've visited this page ${req.session.views} times.`);
});

module.exports = router;
