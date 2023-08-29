const express = require('express');
const router = express.Router();
const canvasController = require('../controllers/canvasController');

// Define the route for the root URL
router.get('/:id', (req, res) => {
    return canvasController.getCanvasById(req.params.id);
});

router.post("/create", (req, res) => {
    return canvasController.createCanvas(req.body);
});


router.post("/update/:id", (req, res) => {
    return canvasController.updateCanvas(req.params.id, req.body);
});

router.post("/delete/:id", (req, res) => {
    return canvasController.deleteCanvas(req.params.id);
});




module.exports = router;

