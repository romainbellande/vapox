import * as mongoose from 'mongoose';

export const AromaSchema = new mongoose.Schema({
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
  percentReco: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});
