const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define the route for the root URL

router.get('/users', async (req, res) => {
    let results = await userController.getUsers();
    res.send(results);
});

router.get('/:id', async (req, res) => {
    let results = await userController.getUserById(req.params.id);
    res.send(results);    
});

router.get('/currentUser', async (req, res) => {
    res.send(req.session.user);
});

router.post("/register", async (req, res) => {
    let results = await userController.register(req.body);
    res.send(results);
});

router.post("/login", async (req, res) => {
    let results = await userController.login(req.body);
    if (!results.success) {
        req.session.user = {
            id: results.data._id,
            username: results.data.username,
            email: results.data.email
        };
        res.redirect("/");
    }else {
        res.redirect("/login")
    }
});

router.post("/update/:id", async  (req, res) => {
    let results = await userController.updateUser(req.user.id, req.body);
    res.send(results);
});

router.post("/delete/:id", async  (req, res) => {
    let results = await userController.deleteUser(req.params.id);
    res.send(results);
});

router.post("/logout", (req, res) => {
    req.session.destroy();
    res.send("logout success!");
});

module.exports = router;

