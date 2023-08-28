const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

mongoose.connect(uri, {
    dbName: dbName,
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

const canvas = new mongoose.Schema({
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

const pattern = new mongoose.Schema({
    pattern: String,
    format: String,
    created: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User: User

}
