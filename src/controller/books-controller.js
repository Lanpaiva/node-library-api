import books from "../models/Book.js";

class BookController {
    static listBooks = (req, res) => {
        books.find()
        .populate('author')
        .exec((err, books) => {
            res.status(200).json(books)
        })
    }

    static listById = (req, res) => {
        const id = req.params.id

        books.findById(id)
          .populate('author', 'name') 
        .exec((err, books) => {
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

   static listbyPublish = (req, res) => {
    const publish = req.query.publish

    books.find({'publish': publish}, {}, (err, books) => {
        res.status(200).send(books)
    })
   }
}

export default BookController;