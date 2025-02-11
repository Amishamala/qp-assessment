const mongoose = require('mongoose');
const GroceryItem = require('../models/groceryItem');

exports.addGroceryItem = async (req, res, next) => {
  try {
    const { name, price, inventory } = req.body;
    const item = new GroceryItem({ name, price, inventory });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

exports.viewGroceryItems = async (req, res, next) => {
  try {
    const items = await GroceryItem.find();
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

exports.removeGroceryItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    await GroceryItem.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.updateGroceryItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, inventory } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    const updatedItem = await GroceryItem.findByIdAndUpdate(id, { name, price, inventory }, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    next(error);
  }
};

exports.manageInventory = async (req, res, next) => {
  try {
    const { id, inventory } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    const updatedItem = await GroceryItem.findByIdAndUpdate(id, { inventory }, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    next(error);
  }
};