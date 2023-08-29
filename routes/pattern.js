const express = require('express');
const router = express.Router();
const patternController = require('../controllers/patternController');

router.get('/pattern/:id', (req, res) => {
    return patternController.getPatternById(req.params.id);
});

router.post("/pattern/create", (req, res) => {
    return patternController.createPattern(req.body);
});

router.post("/pattern/update/:id", (req, res) => {
    return patternController.updatePattern(req.params.id, req.body);
});

router.post("/pattern/delete/:id", (req, res) => {
    return patternController.deletePattern(req.params.id);
});


module.exports = router;

