import authors from "../models/Author.js";

class AuthorController {
    static listAuthors = (req, res) => {
        authors.find((err, authors) => {
            res.status(200).json(authors)
        })
    }

    static listById = (req, res) => {
        const id = req.params.id

        authors.findById(id, (err, authors) => {
            if (err) {
                res.status(400).send({message: `${err.message} - id not found`})
            } else {
                res.status(200).send(authors)
            }
        })
    }

    static createAuthors = (req, res) => {
        let author = new authors(req.body)

        author.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - fail to create author!`})
            } else {
                res.status(201).send(author.toJSON())
            }
       })
    }

    static updateAuthor = (req, res) => {

        const id = req.params.id
        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'author updated!'})
            } else {
               res.status(500).send({message: `${err.message} - fail to update... :(`})
            }
        })
    }

   static removeAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
        if (err) {
            res.status(500).send({message: err.message})
        } else {
            res.status(200).send({message: `author at position id: ${id} deleted from library`})
        }
    })
   }
}

export default AuthorController;