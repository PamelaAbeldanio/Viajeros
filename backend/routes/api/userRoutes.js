const express = require('express');
const userController = require('../../controllers/api/userController');
const router = express.Router();

router.get('/users', userController.users);
router.get('/users/:id', userController.userId);

module.exports = router;