const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++;
    } else {
        req.session.views = 1;
    }
    res.send(`Hello, World! You've visited this API index ${req.session.views} times.`);
});

module.exports = router;
