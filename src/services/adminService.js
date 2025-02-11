const GroceryItem = require('../models/groceryItem');

exports.addGroceryItem = async (data) => {
  const item = new GroceryItem(data);
  return await item.save();
};

exports.viewGroceryItems = async () => {
  return await GroceryItem.find();
};

exports.removeGroceryItem = async (id) => {
  return await GroceryItem.findByIdAndDelete(id);
};

exports.updateGroceryItem = async (id, data) => {
  return await GroceryItem.findByIdAndUpdate(id, data);
};

exports.manageInventory = async (id, inventory) => {
  return await GroceryItem.findByIdAndUpdate(id, { inventory });
};