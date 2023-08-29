const express = require('express');
const session = require('express-session');
require('dotenv').config();


// Import routes from index.js
const routes = require('./routes/index');
const userRoutes = require('./routes/user');
const canvasRoutes = require('./routes/canvas');
const patternRoutes = require('./routes/pattern');

const app = express();

app.use(session({
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true
}));


// Use the imported routes
app.use('/', routes);
app.use('/u', userRoutes);
app.use('/c', canvasRoutes);
app.use('/p', patternRoutes);


const PORT = 6969;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
