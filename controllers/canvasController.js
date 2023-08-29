const mongoDAL = require('../data/mongoDAL');


exports.createCanvas = async function (req, res) {
    try {
        const { pallet, width, height, userId, name } = req.body;
        if (pallet == null || width == null || height == null || userId == null || name == null || userId == null) {
            res.status(400).json({ error: 'Missing required information.' });
            return;
        }else {
            const canvasData = {
                name: name,
                pallet: pallet,
                size: { width: width, height: height},
                pixels: pixels,
                userId: userId,
            };
            const createdCanvas = await mongoDAL.createCanvas(canvasData);
            res.status(201).json(createdCanvas);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the canvas.' });
    }
}

exports.getCanvas = async function (req, res) {
    let results = await mongoDAL.getCanvas();
    return results;
}

exports.updateCanvas = async function (req, res) {
    try {
        const { pallet, width, height, userId, canvasID } = req.body;
        if (pallet == null || width == null || height == null || userId == null || canvasID == null) {
            res.status(400).json({ error: 'Missing required information.' });
            return;
        }else {
            const canvasData = {
                pallet: pallet,
                size: { width: width, height: height},
                pixels: pixels,
                userId: userId,
            };
            const updatedCanvas = await mongoDAL.updateCanvas(canvasID, canvasData);
            res.status(200).json(updatedCanvas);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the canvas.' });
    }
}

exports.deleteCanvas = async function (req, res) {
    try {
        const canvasID = req.params.id;
        const deletedCanvas = await mongoDAL.deleteCanvas(canvasID);
        res.status(200).json(deletedCanvas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the canvas.' });
    }
}

exports.getCanvasById = async function (req, res) {
    try {
        const canvasID = req.params.id;
        const canvas = await mongoDAL.getCanvasById(canvasID);
        res.status(200).json(canvas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting the canvas.' });
    }
}

exports.getCanvasByUserId = async function (req, res) {
    try {
        let userID = req.params.id;
        const canvas = await mongoDAL.getCanvasByUserId(userID);
        res.status(200).json(canvas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting the canvas.' });
    }
}

