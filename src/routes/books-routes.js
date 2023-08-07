import express from "express";
import BookController from "../controller/books-controller.js";

const router = express.Router();

router
    .get('/books', BookController.listBooks)
    .post('/books', BookController.createBooks)

    export default router;