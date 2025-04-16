const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/BookController');

/**
 * @swagger
 * tags:
 *   name: Livros
 *   description: Gerenciamento de livros
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retorna todos os livros
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de todos os livros
 */
router.get('/', bookController.getAllBooks);

/**
 * @swagger
 * /books/author/{author}:
 *   get:
 *     summary: Retorna todos os livros de um determinado autor
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: author
 *         schema:
 *           type: string
 *         required: true
 *         description: Nome do autor
 *     responses:
 *       200:
 *         description: Lista de livros do autor
 */
router.get('/author/:author', bookController.getBooksByAuthor);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Retorna um livro pelo ID
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Livro encontrado
 *       404:
 *         description: Livro não encontrado
 */
router.get('/:id', bookController.getBookById);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Adiciona um novo livro
 *     tags: [Livros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - year
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Livro adicionado com sucesso
 */
router.post('/', bookController.addBook);

module.exports = router;
