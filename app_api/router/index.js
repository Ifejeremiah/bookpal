const express = require('express');
const router = express.Router();
const ctrlBooks = require('../controller');

router
  .route('/books')
  .get(ctrlBooks.getAllBooks)
  .post(ctrlBooks.postBook);

router
  .route('/books/:bookid')
  .get(ctrlBooks.getBook)
  .put(ctrlBooks.putBook)
  .delete(ctrlBooks.deleteBook);

module.exports = router;