const mongoDAL = require('../data/mongoDAL');


exports.createPattern = async function (req, res) {
    try {
        const { pattern, format, canvasId } = req.body;

        if (pattern == null || format == null || canvasId == null) {
            res.json({ error: 'Missing required information.' });
            return;
        }else {
            const patternData = {
                pattern: pattern,
                format: format,
                canvasId: canvasId,
            };
            const createdPattern = await mongoDAL.createPattern(patternData);
            res.json(createdPattern);
        }
    } catch (error) {
        console.error(error);
        res.json({ error: 'An error occurred while creating the pattern.' });
    }
}

exports.getPattern = async function (req, res) {
    let results = await mongoDAL.getPattern();
    return results;
}

exports.updatePattern = async function (req, res) {
    try {
        const { pattern, format, canvasId, patternID } = req.body;
        if (pattern == null || format == null || canvasId == null || patternID == null) {
            res.json({ error: 'Missing required information.' });
            return;
        }else {
            const patternData = {
                pattern: pattern,
                format: format,
                canvasId: canvasId,
            };
            const updatedPattern = await mongoDAL.updatePattern(patternID, patternData);
            res.json(updatedPattern);
        }
    } catch (error) {
        console.error(error);
        res.json({ error: 'An error occurred while updating the pattern.' });
    }
}

exports.deletePattern = async function (req, res) {
    try {
        const {patternID} = req.body;
        const deletedPattern = await mongoDAL.deletePattern(patternID);
        res.json(deletedPattern);
    } catch (error) {
        console.error(error);
        res.json({ error: 'An error occurred while deleting the pattern.' });
    }
}
exports.getPatternById = async function (req, res) {
    try {
        const {patternID} = req.body;
        const patternById = await mongoDAL.getPatternById(patternID);
        res.json(patternById);
    } catch (error) {
        console.error(error);
        res.json({ error: 'An error occurred while getting the pattern.' });
    }
}