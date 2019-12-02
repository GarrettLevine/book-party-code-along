'use strict';

const express = require('express');
const router = express.Router();

const bookService = require('./bookService');

// GET /books/
router.get('/', async (req, res, next) => {})
router.post('/', async (req, res, next) => {});


exports.router = router;
