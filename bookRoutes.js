const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/BookController');

router.get('/', bookController.getAllBooks);
router.get('/ids', bookController.getAllBookIds);
router.get('/author/:author', bookController.getBooksByAuthor);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.addBook);

module.exports = router;
