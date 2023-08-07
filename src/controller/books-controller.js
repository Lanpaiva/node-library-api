import books from "../models/Book.js";

class BookController {
    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books)
        })
    }

    static listById = (req, res) => {
        const id = req.params.id

        books.findById(id, (err, books) => {
            if (err) {
                res.status(400).send({message: `${err.message} - id not found`})
            } else {
                res.status(200).send(books)
            }
        })
    }

    static createBooks = (req, res) => {
        let book = new books(req.body)

        book.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - fail to create book!`})
            } else {
                res.status(201).send(book.toJSON())
            }
       })
    }

    static updateBook = (req, res) => {

        const id = req.params.id
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'book updated!'})
            } else {
               res.status(500).send({message: `${err.message} - fail to update... :(`})
            }
        })
    }

   static removeBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).send({message: err.message})
        } else {
            res.status(200).send({message: `book at position id: ${id} deleted from library`})
        }
    })
   }
}

export default BookController;