import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";

db.on('error', console.log.bind(console, 'connection error!!!'))
db.once('open', () => {
    console.log('open connection successfully!!!')
})

const app = express();

app.use(express.json())

// const books = [
//     {id:1, "title": "Lord of the Rings"},
//     {id:2, "title": "Clean Architecture"},
// ]

app.get('/', (req, res) => {
    res.status(200).send('NodeApp')
})

app.get('/books', (req, res) => {
    books.find((err, books) => {
        res.status(200).json(books)
    })
})

app.get('/books/:id', (req, res) => {
    let index = findBook(req.params.id);
    res.json(books[index])
})


app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send("Created")
})

app.put('/books/:id', (req, res) => {
    let index = findBook(req.params.id);
    books[index].title = req.body.title;
    res.json(books)
})

app.delete('/books/:id', (req, res) => {
    let {id} = req.params;
    let index = findBook(id);
    books.splice(index, 1);
    res.send(`book at position id: ${id} deleted from library`)
})


const findBook = (id) => {
    return books.findIndex(book => book.id == id)
}

export default app;