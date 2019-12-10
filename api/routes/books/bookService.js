'use strict'

const Book = require('./bookModel')

// Helper function to list each of the books in the database
exports.listBooks = async ({ filter }) => {
  try {
    const books = await Book.find(filter)
    console.log({ filter })
    console.log('books:', books)
    return books
  } catch (ex) {
    throw new Error(ex.message)
  }
}

exports.getBookByID = async (id) => {
  try {
    const book = await Book.findById(id)
    return book
  } catch (ex) {
    throw new Error(ex.message)
  }
}

// Create a new book that will be added to the database
exports.createBook = async (bookData) => {
  try {
    const newBook = new Book(bookData)
    const book = await newBook.save()
    return book
  } catch (ex) {
    throw new Error(ex.message)
  }
}
