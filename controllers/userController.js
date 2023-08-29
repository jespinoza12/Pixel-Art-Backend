const mongoDAL = require('../data/mongoDAL');
const bcrypt = require('bcrypt')

exports.register = async function (req, res) {
    try {
        const { username, email, password } = req.body;
        const user = await mongoDAL.getUserByEmail(req.body.email);
        if (user) {
            res.status(409).json({ error: 'User already Exisits.' });
            return;
        }else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const userData = {
                username: username,
                email: email,
                password: hashedPassword,
            };
            const createdUser = await mongoDAL.createUser(userData);
            res.status(201).json(createdUser);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
};

exports.getUsers = async function (req, res) {
    return await mongoDAL.getAllUsers();
}

exports.login = async function (req, res) {
    try {
        const { email, password } = req.body;
        const user = await mongoDAL.getUserByEmail(email);
        if (user) {
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (isPasswordCorrect) {
                res.status(200).json(user);
            } else {
                res.status(401).json({ error: 'Invalid email or password.' });
            }
        } else {
            res.status(401).json({ error: 'Invalid email or password.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while logging in.' });
    }
};

exports.updateUser = async function (req, res) {
    try {
        const { username, email, password, userID } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = {
            username: username,
            email: email,
            password: hashedPassword,
        };
        const updatedUser = await mongoDAL.updateUser(userID, userData);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating the user.' });
    }
}

exports.deleteUser = async function (req, res) {
    try {
        const {userID} = req.body;
        const deletedUser = await mongoDAL.deleteUser(userID);
        res.status(200).json(deletedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the user.' });
    }
}

exports.getUserById = async function (req, res) {
    try {
        const {userID} = req.body;
        const user = await mongoDAL.getUserById(userID);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while getting the user.' });
    }
}
