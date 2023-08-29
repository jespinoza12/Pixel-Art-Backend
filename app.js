const express = require('express');
const session = require('express-session');
const app = express();
require('dotenv').config();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

// Import routes from index.js
const routes = require('./routes/index');
const userRoutes = require('./routes/user');
const canvasRoutes = require('./routes/canvas');
const patternRoutes = require('./routes/pattern');

// Use the imported routes
app.use('/', routes);
app.use('/u', userRoutes);
app.use('/c', canvasRoutes);
app.use('/p', patternRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
