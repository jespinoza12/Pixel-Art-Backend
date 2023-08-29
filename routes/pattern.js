const express = require('express');
const router = express.Router();
const patternController = require('../controllers/patternController');

router.get('/:id', (req, res) => {
    return patternController.getPatternById(req, res);
});

router.get('/user/:id', (req, res) => {
    return patternController.getPatternByUserId(req, res);
});

router.post("/create", (req, res) => {
    return patternController.createPattern(req, res);
});

router.post("/update/:id", (req, res) => {
    return patternController.updatePattern(req, req, res);
});

router.post("/delete/:id", (req, res) => {
    return patternController.deletePattern(req, res);
});

module.exports = router;

