const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/view', userController.viewGroceryItems);
router.post('/book', userController.bookGroceryItems);

module.exports = router;