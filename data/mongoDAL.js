const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
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
    created: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);
const Canvas = mongoose.model('Canvas', canvasSchema);
const Pattern = mongoose.model('Pattern', patternSchema);

module.exports = {
    User: User,
    Pattern: Pattern,
    Canvas: Canvas,
}

//User Operations
async function createUser(userData) {
    try {
        const newUser = new User(userData);
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw error;
    }
}

async function getUsers() {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw error;
    }
}

async function getUserById(userId) {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        throw error;
    }
}

async function updateUser(userId, newData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
        return updatedUser;
    } catch (error) {
        throw error;
    }
}

async function deleteUser(userId) {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        return deletedUser;
    } catch (error) {
        throw error;
    }
}

async function getUserByEmail(email) {
    try {
        const user = await User.findOne({ email: email });
        return user;
    } catch (error) {
        throw error;
    }    
}


//Canvas Operations
async function createCanvas(canvasData) {
    try {
        const newCanvas = new Canvas(canvasData);
        const savedCanvas = await newCanvas.save();
        return savedCanvas;
    } catch (error) {
        throw error;
    }
}

async function getCanvas() {
    try {
        const canvas = await Canvas.find({});
        return canvas;
    } catch (error) {
        throw error;
    }
}

async function updateCanvas(canvasId, newData) {
    try {
        const updatedCanvas = await Canvas.findByIdAndUpdate(canvasId, newData, { new: true });
        return updateCanvas;
    } catch (error) {
        throw error;
    }
}

async function getCanvasById(canvasId) {
    try {
        const canvas = await Canvas.findById(canvasId);
        return canvas;
    } catch (error) {
        throw error;
    }
}

async function deleteCanvas(canvasId) {
    try {
        const deletedCanvas = await Canvas.findByIdAndDelete(canvasId);
        return deletedCanvas;
    } catch (error) {
        throw error;
    }
}

//Pattern Operations
async function createPattern(patternData) {
    try {
        const newPattern = new Pattern(patternData);
        const savedPattern = await newPattern.save();
        return savedPattern;
    } catch (error) {
        throw error;
    }
}

async function getPattern() {
    try {
        const pattern = await Pattern.find({});
        return pattern;
    } catch (error) {
        throw error;
    }
}

async function updatePattern(patternID, newData) {
    try {
        const updatedPattern = await Pattern.findByIdAndUpdate(patternID, newData, { new: true });
        return updatedPattern;
    } catch (error) {
        throw error;
    }
}

async function getPatternById(patternId) {
    try {
        const pattern = await Pattern.findById(patternId);
        return pattern;
    } catch (error) {
        throw error;
    }
}

async function deletePattern(patternId) {
    try {
        const deletedPattern = await Pattern.findByIdAndDelete(patternId);
        return deletedPattern;
    } catch (error) {
        throw error;
    }
}



