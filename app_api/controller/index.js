const mongoose = require('mongoose');
const Book = mongoose.model('Book');

const getAllBooks = (req, res) => {
  Book.find({}, (err, books) => {
    if (err) res.status(404).json({ message: 'No books found' });
    res.status(200).json(books);
  })
};

const getBook = (req, res) => {
  if (!req.params.bookid) return res.status(400).json({ message: 'Books id is required' });
  Book.findById(req.params.bookid, (err, book) => {
    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (err) return res.status(400).json(err);
    res.status(200).json(book);
  });
}

const postBook = (req, res) => {
  if (!req.body.title || !req.body.author || !req.body.content) {
    return res.status(400).json({ message: 'Book title, author and content is required' });
  } else {
    Book.create({
      title: req.body.title,
      author: req.body.author,
      content: req.body.content
    }, (err, book) => {
      if (err) res.status(400).json(err);
      else res.status(201).json(book);
    });
  }
};

const putBook = (req, res) => {
  if (!req.params.bookid) return res.status(400).json({ message: 'Books id is required' });
  if (!req.body.title || !req.body.author || !req.body.content) {
    return res.status(400).json({ message: 'Book title, author and content is required' });
  }
  Book
    .findById(req.params.bookid)
    .exec((err, book) => {
      if (!book) return res.status(404).json({ message: 'Book not found' });
      else if (err) return res.status(400).json(err);
      book.title = req.body.title;
      book.author = req.body.author;
      book.content = req.body.content;

      book.save((err, book) => {
        if (err) return res.status(400).json(err);
        else if (!book) return res.status(400).json({ message: 'Could not updatebook' });
        res.status(200).json(book)
      })
    });
}

const deleteBook = (req, res) => {
  if (!req.params.bookid) return res.status(400).json({ message: 'Books id is required' });
  Book
    .findByIdAndRemove(req.params.bookid)
    .exec((err, book) => {
      if (!book) return res.status(404).json({ message: 'Book not found' })
      else if (err) res.status(400).json(err);
      res.status(204).json(null);
    })
}

module.exports = {
  getAllBooks,
  getBook,
  postBook,
  putBook,
  deleteBook
}