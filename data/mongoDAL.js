const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});


const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    created: {
        type: Date,
        default: Date.now,
    },
});

const canvasSchema = new mongoose.Schema({
    pallet: String,
    userID: String,
    size: {
        width: Number,
        height: Number,
    },
    pixels: String,
    created: {
        type: Date,
        default: Date.now,
    },
});

const patternSchema = new mongoose.Schema({
    pattern: String,
    format: String,
    canvasID: String,
    created: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);
const Canvas = mongoose.model('Canvas', canvasSchema);
const Pattern = mongoose.model('Pattern', patternSchema);


//User Operations
exports.createUser = async function (userData) {
    try {
        const newUser = new User(userData);
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw error;
    }
}

exports.getAllUsers = async function (){
    try {
        const users = await User.find({});
        console.log(users);
        return users;
    } catch (error) {
        throw error;
    }
}

exports.getUserById = async function (userId) {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw error;
    }
}

exports.updateUser = async function (userId, newData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
        return updatedUser;
    } catch (error) {
        throw error;
    }
}

exports.deleteUser = async function (userId) {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        return deletedUser;
    } catch (error) {
        throw error;
    }
}

exports.getUserByEmail = async function (email) {
    try {
        const user = await User.findOne({ email: email });
        return user;
    } catch (error) {
        throw error;
    }    
}

//Canvas Operations
exports.createCanvas = async function (canvasData) {
    try {
        const newCanvas = new Canvas(canvasData);
        const savedCanvas = await newCanvas.save();
        return savedCanvas;
    } catch (error) {
        throw error;
    }
}

exports.getCanvas = async function () {
    try {
        const canvas = await Canvas.find({});
        return canvas;
    } catch (error) {
        throw error;
    }
}

exports.updateCanvas = async function (canvasId, newData) {
    try {
        const updatedCanvas = await Canvas.findByIdAndUpdate(canvasId, newData, { new: true });
        return updateCanvas;
    } catch (error) {
        throw error;
    }
}

exports.getCanvasById = async function (canvasId) {
    try {
        const canvas = await Canvas.findById(canvasId);
        return canvas;
    } catch (error) {
        throw error;
    }
}

exports.deleteCanvas = async function (canvasId) {
    try {
        const deletedCanvas = await Canvas.findByIdAndDelete(canvasId);
        return deletedCanvas;
    } catch (error) {
        throw error;
    }
}

//Pattern Operations
exports.createPattern = async function (patternData) {
    try {
        const newPattern = new Pattern(patternData);
        const savedPattern = await newPattern.save();
        return savedPattern;
    } catch (error) {
        throw error;
    }
}

exports.getPattern = async function () {
    try {
        const pattern = await Pattern.find({});
        return pattern;
    } catch (error) {
        throw error;
    }
}

exports.updatePattern = async function (patternID, newData) {
    try {
        const updatedPattern = await Pattern.findByIdAndUpdate(patternID, newData, { new: true });
        return updatedPattern;
    } catch (error) {
        throw error;
    }
}

exports.getPatternById = async function (patternId) {
    try {
        const pattern = await Pattern.findById(patternId);
        return pattern;
    } catch (error) {
        throw error;
    }
}

exports.deletePattern = async function (patternId) {
    try {
        const deletedPattern = await Pattern.findByIdAndDelete(patternId);
        return deletedPattern;
    } catch (error) {
        throw error;
    }
}
