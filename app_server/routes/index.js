var express = require('express');
var router = express.Router();
const ctrlHome = require('../controllers/list-of-books');

/* GET home page. */
router
  .get('/', ctrlHome.homelist)
  .get('/books', ctrlHome.eachbook)
  .get('/about', ctrlHome.aboutPage)
  .get('/action-on-books', ctrlHome.actionOnBooks)
  .get('/books/take-action', ctrlHome.takeActions);

// Add books
router
  .get('/add-books', ctrlHome.addBooks)
  .post('/add-books');

module.exports = router;