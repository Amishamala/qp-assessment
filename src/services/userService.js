const GroceryItem = require('../models/groceryItem');

exports.viewGroceryItems = async () => {
  return await GroceryItem.find();
};

exports.bookGroceryItems = async (items) => {
  for (const item of items) {
    const groceryItem = await GroceryItem.findById(item.id);
    if (groceryItem.inventory < item.quantity) {
      throw new Error(`Not enough inventory for item ${item.id}`);
    }
    groceryItem.inventory -= item.quantity;
    await groceryItem.save();
  }
};