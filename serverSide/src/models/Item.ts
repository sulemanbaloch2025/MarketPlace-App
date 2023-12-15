import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  seller: { type: String, required: true },
  description: { type: String, default: '' },
  size: { type: String, default: '' },
  color: { type: String, default: '' },
  condition: { type: String, default: '' },
  for: { type: String, default: '' },
  category: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
});

const Item = mongoose.model('Item', itemSchema);
export default Item;
