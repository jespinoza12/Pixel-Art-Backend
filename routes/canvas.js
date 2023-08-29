const express = require('express');
const router = express.Router();
const canvasController = require('../controllers/canvasController');

// Define the route for the root URL
router.get('/:id', (req, res) => {
    return canvasController.getCanvasById(req.params.id, res);
});

router.get('/user/:id', (req, res) => {
    return canvasController.getCanvasByUserId(req.params.id, res);
});

router.post("/create", (req, res) => {
    return canvasController.createCanvas(req, res);
});


router.post("/update/:id", (req, res) => {
    return canvasController.updateCanvas(req.params.id, req, res);
});

router.post("/delete/:id", (req, res) => {
    return canvasController.deleteCanvas(req.params.id, res);
});


module.exports = router;

