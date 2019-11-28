'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Map to fields in the DB
const bookSchema = new Schema();

module.exports = mongoose.model('Book', bookSchema);