import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bases: [{
    type: mongoose.SchemaTypes.ObjectId,
     ref: 'Base',
  }],
  boosters: [{
    type: mongoose.SchemaTypes.ObjectId,
     ref: 'Booster',
  }],
  recipes: [{
    type: mongoose.SchemaTypes.ObjectId,
     ref: 'Recipe',
  }],
  aromas: [{
    type: mongoose.SchemaTypes.ObjectId,
     ref: 'Aroma',
  }],
});
