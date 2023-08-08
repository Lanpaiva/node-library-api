import express from "express";
import authors from "./authors-routes.js";
import books from "./books-routes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({title: "nodeApp"})
    })

    app.use(
        express.json(),
        books,
        authors
    )
}

export default routes;