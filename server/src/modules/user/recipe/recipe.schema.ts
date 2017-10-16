import * as mongoose from 'mongoose';

export const RecipeSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  ml: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  nicotine: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  _base: {
    type: mongoose.SchemaTypes.ObjectId,
     ref: 'Base',
  },
  _booster: {
    type: mongoose.SchemaTypes.ObjectId,
     ref: 'Booster',
  },
  _aroma: {
    type: mongoose.SchemaTypes.ObjectId,
     ref: 'Aroma',
  },
}, {
  timestamps: true,
});
