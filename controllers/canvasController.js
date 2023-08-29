const mongoDAL = require('../data/mongoDAL');


exports.createCanvas = async function (req, res) {
    try {
        const { pallet, width, height, userId, name } = req.body;
        if (pallet == null || width == null || height == null || userId == null || name == null) {
            res.json({ error: 'Missing required information.' });
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
            res.json(createdCanvas);
        }
    } catch (error) {
        console.error(error);
        res.json({ error: 'An error occurred while creating the canvas.' });
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
            res.json({ error: 'Missing required information.' });
            return;
        }else {
            const canvasData = {
                pallet: pallet,
                size: { width: width, height: height},
                pixels: pixels,
                userId: userId,
            };
            const updatedCanvas = await mongoDAL.updateCanvas(canvasID, canvasData);
            res.json(updatedCanvas);
        }
    } catch (error) {
        console.error(error);
        res.json({ error: 'An error occurred while updating the canvas.' });
    }
}

exports.deleteCanvas = async function (req, res) {
    try {
        const { canvasID } = req.body;
        const deletedCanvas = await mongoDAL.deleteCanvas(canvasID);
        res.json(deletedCanvas);
    } catch (error) {
        console.error(error);
        res.json({ error: 'An error occurred while deleting the canvas.' });
    }
}

exports.getCanvasById = async function (req, res) {
    try {
        const { canvasID} = req.body;
        const canvas = await mongoDAL.getCanvasById(canvasID);
        res.json(canvas);
    } catch (error) {
        console.error(error);
        res.json({ error: 'An error occurred while getting the canvas.' });
    }
}

exports.getCanvasByUserId = async function (req, res) {
    try {
        const { userID} = req.body;
        const canvas = await mongoDAL.getCanvasByUserId(userID);
        res.json(canvas);
    } catch (error) {
        console.error(error);
        res.json({ error: 'An error occurred while getting the canvas.' });
    }
}

