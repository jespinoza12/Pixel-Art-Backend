const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define the route for the root URL

router.get('/user/users', async (req, res) => {
    let results = await userController.getUsers();
    return results;
});

router.get('/user/:id', async (req, res) => {
    let results = await userController.getUserById(req.params.id);
    return results;    
});

router.post("/user/register", async (req, res) => {
    let results = await userController.createUser(req.body);
    return results;
});

router.post("/user/login", async (req, res) => {
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

router.post("/user/update/:id", async  (req, res) => {
    let results = await userController.updateUser(req.user.id, req.body);
    return results;
});

router.post("/user/delete/:id", async  (req, res) => {
    let results = await userController.deleteUser(req.params.id);
    return results;
});

router.post("/user/logout", (req, res) => {
    req.session.destroy();
    res.send("logout success!");
});


module.exports = router;

