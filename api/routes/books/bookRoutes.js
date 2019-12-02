'use strict';

const express = require('express');
const router = express.Router();

const bookService = require('./bookService');

// GET /books/

router.get('/', async (req, res, next) => {
    try {
      const books = await bookService.listBooks();
      res.status(200).json({ data: books });
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ error: 'internal server error' });
    }
  });

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await bookService.getBookByID(id);
    res.status(200).json(book);
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ error: 'internal server error' });
  };
});

router.post('/', async (req, res, next) => {
  const { authorName, title, rating: reqRating, comment } = req.body;
  if (!authorName || authorName === "") {
    res.status(400).json({ error: 'author name must be provided'});
    return
  }

  if (!title || title === "") {
    res.status(400).json({ error: 'title must be provided'});
    return
  }

  const rating = Number(reqRating)
  if (!rating || rating > 10 || rating < 1) {
    res.status(400).json({ error: 'rating must be between 1 and 10'});
    return
  }
  
  try {
    const newBook = await bookService.createBook({
      authorName,
      title,
      rating,
      comment,
    });
    res.status(200).json({ id: newBook.id });
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ error: 'internal server error' });
  }
});


exports.router = router;
