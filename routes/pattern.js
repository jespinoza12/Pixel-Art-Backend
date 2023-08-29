const express = require('express');
const router = express.Router();
const patternController = require('../controllers/patternController');

router.get('/:id', (req, res) => {
    return patternController.getPatternById(req.params.id);
});

router.get('/user/:id', (req, res) => {
    return patternController.getPatternByUserId(req.params.id);
});

router.post("/create", (req, res) => {
    return patternController.createPattern(req.body);
});



router.post("/update/:id", (req, res) => {
    return patternController.updatePattern(req.params.id, req.body);
});

router.post("/delete/:id", (req, res) => {
    return patternController.deletePattern(req.params.id);
});

module.exports = router;

