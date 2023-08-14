import express from "express";
import BookController from "../controller/books-controller.js";

const router = express.Router();

router
    .get('/books', BookController.listBooks)
    .get('/books/find',BookController.listbyPublish)
    .get('/books/:id', BookController.listById)
    .post('/books', BookController.createBooks)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id', BookController.removeBook)

    export default router;