import express from "express";
import books from "./books-routes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({title: "nodeApp"})
    })

    app.use(
        express.json(),
        books
    )
}

export default routes;