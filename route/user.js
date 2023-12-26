const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.get('/user/add-user', userController.getUsers);

router.post('/user/add-user', userController.postUsers);

router.get('/user/edit-user/:userId', userController.getEditUser);

router.get('/user/delete-user/:userId', userController.getDeleteUser);

// router.post('/user/add-user', userController.postEditUser);





 module.exports = router;