const { response } = require('express');
const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
}


const renderHomeList = (req, res, content) => {
  res.render('index', {
    username: 'Alex',
    collections: content
  });
};

// Home list of books
const homelist = (req, res) => {
  const path = '/api/books/'
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      if (err) console.log(err);
      else if (response === '404') return res.status(404).json({ message: 'Sorry, could not find books at the moment' });
      else {
        renderHomeList(req, res, body);
      }
    });
};

const renderEachBook = (req, res, content) => {
  res.render('books', {
    authorName: content.author,
    bookTitle: content.title,
    bookStory: content.content
  });
};

// Get each book
const eachbook = (req, res) => {
  const bookid = req.params.bookid;
  const path = `/api/books/${bookid}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  }
  request(
    requestOptions,
    (err, response, body) => {
      if (err) console.log(err);
      if (response.statusCode === 404) return res.status(404).json({ message: 'Sorry we could not find this book' });
      renderEachBook(req, res, body);
    });
};

const renderBooksForAction = (req, res, content) => {
  res.render('actions', {
    username: 'Alex',
    collections: content
  });
};

// Actions on books
const actions = (req, res) => {
  const path = '/api/books';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  }
  request(
    requestOptions,
    (err, response, body) => {
      if (err) console.log(err);
      else if (response.statusCode === 404) return res.status(404).json({ message: 'Sorry, we could not find this book at the moment' });
      else {
        renderBooksForAction(req, res, body);
      }
    }
  )
};

const renderActionsToTake = (req, res, content) => {
  res.render('take-action', {
    bookTitle: content.title,
    bookId: content._id
  });
};

const takeActions = (req, res) => {
  const bookid = req.params.bookid;
  const path = `/api/books/${bookid}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  }
  request(
    requestOptions,
    (err, response, body) => {
      if (err) console.log(err);
      else if (response.statusCode !== 200) {
        return res.status(404).json({ message: 'Could not find book' });
      } else {
        renderActionsToTake(req, res, body);
      }
    }
  )
};

// Add book
const addBook = (req, res) => {
  const path = `/api/books/`;
  if (!req.body.title || !req.body.author || !req.body.content) {
    res.redirect('/add-books');
  } else {
    const postbody = {
      title: req.body.title,
      author: req.body.author,
      content: req.body.content
    }
    const requestOptions = {
      url: `${apiOptions.server}${path}`,
      method: 'POST',
      json: postbody
    }
    request(
      requestOptions,
      (err, response, body) => {
        if (err) console.log(err);
        if (response.statusCode === 201) {
          res.redirect('/');
        }
      }
    )
  }
}

const renderFormAddBook = (req, res, content) => {
  res.render('add-book')
}

// Form for adding a new book
const FormAddBook = (req, res) => {
  renderFormAddBook(req, res);
}


const renderFormUpdateBook = (req, res, content) => {
  res.render('update-book', {
    bookTitle: content.title,
    bookAuthor: content.author,
    bookContent: content.content
  })
}

// Update book
const updateBook = (req, res) => {
  const bookId = req.params.bookid;
  const path = `/api/books/${bookId}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  }
  request(
    requestOptions,
    (err, response, body) => {
      if (err) console.log(err);
      else if (response.statusCode === 404) {
        res.status(404).json({ message: 'Book not found' });
      }
      else {
        renderFormUpdateBook(req, res, body);
      }
    }
  )
};

const doUpdateBook = (req, res) => {
  const bookId = req.params.bookid;
  const path = `/api/books/${bookId}`;
  const updatebody = {
    title: req.body.title,
    author: req.body.author,
    content: req.body.content
  }
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'PUT',
    json: updatebody
  }
  request(
    requestOptions,
    (err, response, body) => {
      if (err) console.log(err);
      else if (response.statusCode === 404) {
        return res.status(404).json({ message: 'Could not find book to update' });
      } else {
        res.redirect('/actions/books');
      }
    }
  )
}

// Delete book 
const deleteBook = (req, res) => {
  const bookId = req.params.bookid;
  const path = `/api/books/${bookId}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'DELETE',
    json: {}
  }
  request(
    requestOptions,
    (err, response, body) => {
      if (err) console.log(err);
      if (response.statusCode === 204) {
        res.redirect('/actions/books');
      } else {
        res.status(404).json({ message: 'Could not find book to delete' });
      }
    }
  );
};

// About page
const aboutPage = (req, res) => {
  res.render('about');
};

module.exports = {
  homelist,
  eachbook,
  aboutPage,
  actions,
  takeActions,
  addBook,
  FormAddBook,
  updateBook,
  doUpdateBook,
  deleteBook
}