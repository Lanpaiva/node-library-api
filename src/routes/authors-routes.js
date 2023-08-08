import express from "express";
import AuthorController from "../controller/authors-controller.js";

const router = express.Router();

router
    .get('/authors', AuthorController.listAuthors)
    .get('/authors/:id', AuthorController.listById)
    .post('/authors', AuthorController.createAuthors)
    .put('/authors/:id', AuthorController.updateAuthor)
    .delete('/authors/:id', AuthorController.removeAuthor)

    export default router;