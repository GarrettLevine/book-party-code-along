'use strict';

const express = require('express');
const router = express.Router();

const bookService = require('./bookService');

// GET /books/
router.route('/')
  .get(async (req, res, next) => {})
  .post(async (req, res, next) => {});


exports.router = router;
