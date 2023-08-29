const express = require('express');
const router = express.Router();
const canvasController = require('../controllers/canvasController');

// Define the route for the root URL
router.get('/canvas/:id', (req, res) => {
    return canvasController.getCanvasById(req.params.id);
});

router.post("/canvas/create", (req, res) => {
    return canvasController.createCanvas(req.body);
});


router.post("/canvas/update/:id", (req, res) => {
    return canvasController.updateCanvas(req.params.id, req.body);
});

router.post("/canvas/delete/:id", (req, res) => {
    return canvasController.deleteCanvas(req.params.id);
});


module.exports = router;

