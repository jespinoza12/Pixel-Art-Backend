const mongoDAL = require('../data/mongoDAL');


exports.createPattern = async function (req, res) {
    try {
        const { pattern, format, canvasId } = req.body;
        const patternData = {
            pattern: pattern,
            format: format,
            canvasId: canvasId,
        };
        const createdPattern = await mongoDAL.createPattern(patternData);
        res.status(201).json(createdPattern);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the pattern.' });
    }
}

exports.getPattern = async function (req, res) {
    let results = await mongoDAL.getPattern();
    return results;
}

exports.updatePattern = async function (req, res) {
    try {
        const { pattern, format, canvasId, patternID } = req.body;
        const patternData = {
            pattern: pattern,
            format: format,
            canvasId: canvasId,
        };
        const updatedPattern = await mongoDAL.updatePattern(patternID, patternData);
        res.status(200).json(updatedPattern);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the pattern.' });
    }
}

exports.deletePattern = async function (req, res) {
    try {
        const { patternID} = req.body;
      
        const deletedPattern = await mongoDAL.deletePattern(patternID);
        res.status(200).json(deletedPattern);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the pattern.' });
    }
}
exports.getPatternById = async function (req, res) {
    try {
        const { patternID} = req.body;
        const patternById = await mongoDAL.getPatternById(patternID);
        res.status(200).json(patternById);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting the pattern.' });
    }
}