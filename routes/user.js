const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define the route for the root URL

router.get('/users', async (req, res) => {
    let results = await userController.getUsers();
    res.send(results);
});

router.get('/:id', async (req, res) => {
    let results = await userController.getUserById(req.params.id, res);
    res.send(results);    
});

router.get('/currentUser', async (req, res) => {
    return res.json(req.session.user);
});

router.post("/register", async (req, res) => {
    let results = await userController.register(req, res);
    return results;
});

router.post("/login", async (req, res) => {
    let results = await userController.login(req, res);
    console.log(results)
    if (results?.success) {
        req.session.user = {
            id: results._id,
            username: results.username,
            email: results.email
        };
        return results;
    }else {
        return results;
    }
});

router.post("/update/:id", async  (req, res) => {
    let results = await userController.updateUser(req.user.id, res);
    return results;
});

router.post("/delete/:id", async  (req, res) => {
    let results = await userController.deleteUser(req.params.id, res);
    return results;
});

router.post("/logout", (req, res) => {
    req.session.destroy();
    res.send("logout success!");
});

module.exports = router;

