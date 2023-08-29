const mongoDAL = require('../data/mongoDAL');


exports.createPattern = async function (req, res) {
    try {
        const { name, pattern, format, canvasId } = req.body;

        if (pattern == null || format == null || canvasId == null || name == null) {
            res.status(400).json({ error: 'Missing required information.' });
            return;
        }else {
            const patternData = {
                name: name,
                pattern: pattern,
                format: format,
                canvasId: canvasId,
            };
            const createdPattern = await mongoDAL.createPattern(patternData);
            res.status(201).json(createdPattern);
        }
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
        const {name, pattern, format, canvasId, patternID, userID } = req.body;
        if (name == null || pattern == null || format == null || canvasId == null || patternID == null || userID == null) {
            res.status(400).json({ error: 'Missing required information.' });
            return;
        }else {
            const patternData = {
            name: name,
            pattern: pattern,
            format: format,
            canvasId: canvasId,
            userID: userID,
        };
        const updatedPattern = await mongoDAL.updatePattern(patternID, patternData);
        res.status(200).json(updatedPattern);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the pattern.' });
    }
}

exports.deletePattern = async function (req, res) {
    try {
        const {patternID} = req.body;
        const deletedPattern = await mongoDAL.deletePattern(patternID);
        res.status(200).json(deletedPattern);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the pattern.' });
    }
}
exports.getPatternById = async function (req, res) {
    try {
        const {patternID} = req.body;
        const patternById = await mongoDAL.getPatternById(patternID);
        res.status(200).json(patternById);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting the pattern.' });
    }
}

exports.getPatternByUserId = async function (req, res) {
    try {
        const {userID} = req.params.id;
        const patternByUserId = await mongoDAL.getPatternByUserId(userID);
        res.status(200).json(patternByUserId);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting the pattern.' });
    }
}