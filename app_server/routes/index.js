var express = require('express');
var router = express.Router();
const ctrlHome = require('../controllers');


router
  // List of Books
  .get('/', ctrlHome.homelist)

  // Read a book
  .get('/books/:bookid', ctrlHome.eachbook)

  // Actions on books
  .get('/actions/books', ctrlHome.actions)

  // Take action on a particular book
  .get('/actions/books/book/:bookid', ctrlHome.takeActions)

  // Delete a book
  .get('/actions/books/delete/:bookid', ctrlHome.deleteBook)

  // About Page
  .get('/about', ctrlHome.aboutPage)

// Add a book to collections
router
  .route('/actions/books/add')
  .get(ctrlHome.FormAddBook)
  .post(ctrlHome.addBook)

// Update a book
router
  .route('/actions/books/update/:bookid')
  .get(ctrlHome.updateBook)
  .post(ctrlHome.doUpdateBook);

module.exports = router;