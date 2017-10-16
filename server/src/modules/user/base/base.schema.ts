import * as mongoose from 'mongoose';

export const BaseSchema = new mongoose.Schema({
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
  pg: {
    type: Number,
    required: true,
  },
  vg: {
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
