class Book {
  constructor(name, author, ISBN, status) {
    this.name = name;
    this.author = author;
    this.ISBN = ISBN;
    this.status = status;
  }
}

class Library {
  books = [];

  addBook(book) {
    this.books.push(book);
  }

  borrowBook(isbn) {
    this.getBook = this.books.find((book) => book.ISBN === isbn);
  }

  returnBook(isbn) {
    this.borrowBook(isbn);
    return this.getBook;
  }

  listAvailableBooks() {
    return this.books.filter((book) => book.status === true);
  }
}

const book = new Book("name", "author", "2", true);
const book1 = new Book("name", "author", "2", false);
const library = new Library();
library.addBook(book);
library.addBook(book1);
library.borrowBook(book.ISBN);
const result = library.returnBook(book.ISBN);

console.log(result);
