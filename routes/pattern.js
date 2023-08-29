const express = require('express');
const router = express.Router();
const patternController = require('../controllers/patternController');

router.get('/:id', (req, res) => {
    return patternController.getPatternById(req.params.id, res);
});

router.get('/user/:id', (req, res) => {
    return patternController.getPatternByUserId(req.params.id, res);
});

router.post("/create", (req, res) => {
    return patternController.createPattern(req, res);
});

router.post("/update/:id", (req, res) => {
    return patternController.updatePattern(req.params.id, req, res);
});

router.post("/delete/:id", (req, res) => {
    return patternController.deletePattern(req.params.id, res);
});

module.exports = router;

