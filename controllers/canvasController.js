const mongoDAL = require('../data/mongoDAL');


exports.createCanvas = async function (req, res) {
    try {
        const { pallet, width, height, userId } = req.body;
        const canvasData = {
            pallet: pallet,
            size: { width: width, height: height},
            pixels: pixels,
            userId: userId,
        };
        const createdCanvas = await mongoDAL.createCanvas(canvasData);
        res.status(201).json(createdCanvas);
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
        const canvasData = {
            pallet: pallet,
            size: { width: width, height: height},
            pixels: pixels,
            userId: userId,
        };
        const updatedCanvas = await mongoDAL.updateCanvas(canvasID, canvasData);
        res.status(200).json(updatedCanvas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the canvas.' });
    }
}

exports.deleteCanvas = async function (req, res) {
    try {
        const { canvasID } = req.body;
        const deletedCanvas = await mongoDAL.deleteCanvas(canvasID);
        res.status(200).json(deletedCanvas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the canvas.' });
    }
}

exports.getCanvasById = async function (req, res) {
    try {
        const { canvasID} = req.body;
        const canvas = await mongoDAL.getCanvasById(canvasID);
        res.status(200).json(canvas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting the canvas.' });
    }
}

