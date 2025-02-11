const mongoose = require('mongoose');
const GroceryItem = require('../models/groceryItem');

exports.viewGroceryItems = async (req, res, next) => {
  try {
    const items = await GroceryItem.find();
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

exports.bookGroceryItems = async (req, res, next) => {
  try {
    const { items } = req.body; // items is an array of { id, quantity }
    for (const item of items) {
      if (!mongoose.Types.ObjectId.isValid(item.id)) {
        return res.status(400).json({ message: `Invalid ID format for item ${item.id}` });
      }
      const groceryItem = await GroceryItem.findById(item.id);
      if (groceryItem.inventory < item.quantity) {
        return res.status(400).json({ message: `Not enough inventory for item ${item.id}` });
      }
      groceryItem.inventory -= item.quantity;
      await groceryItem.save();
    }
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};