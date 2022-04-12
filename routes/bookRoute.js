const {Router} = require("express")
const {getBooks, createBook, updadateBook, updateBook} =require("../controllers/booksController")
const {byCategory, byAuthor} =require("../handlers/books.handlers")


const router = Router();

router.route("/books").get([byCategory, byAuthor], getBooks).post(createBook)

router.put("/books", updateBook)

module.exports = router;