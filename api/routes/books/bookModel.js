'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Map to fields in the DB
const bookSchema = new Schema({
  authorName: String,
  title: String,
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Book', bookSchema);