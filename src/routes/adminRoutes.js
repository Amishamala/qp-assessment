const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/add', adminController.addGroceryItem);
router.get('/view', adminController.viewGroceryItems);
router.delete('/remove/:id', adminController.removeGroceryItem);
router.put('/update/:id', adminController.updateGroceryItem);
router.put('/inventory', adminController.manageInventory);

module.exports = router;