const express = require('express');
const router = express.Router();
const canvasController = require('../controllers/canvasController');

// Define the route for the root URL
router.get('/:id', (req, res) => {
    return canvasController.getCanvasById(req, res);
});

router.get('/user/:id', (req, res) => {
    return canvasController.getCanvasByUserId(req, res);
});

router.post("/create", (req, res) => {
    return canvasController.createCanvas(req, res);
});


router.post("/update/:id", (req, res) => {
    return canvasController.updateCanvas(req, req, res);
});

router.post("/delete/:id", (req, res) => {
    return canvasController.deleteCanvas(req, res);
});


module.exports = router;

