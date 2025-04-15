const books = require('../Models/bookModel');

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.getAllBookIds = (req, res) => {
  const ids = books.map(book => book.id);
  res.json(ids);
};

exports.getBooksByAuthor = (req, res) => {
  const author = req.params.author.toLowerCase();
  const result = books.filter(book => book.author.toLowerCase() === author);
  res.json(result);
};

exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
  res.json(book);
};

exports.addBook = (req, res) => {
  const { title, author, year } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
    year
  };
  books.push(newBook);
  res.status(201).json(newBook);
};
