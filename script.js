// DOM Selectors
const bookDisplay = document.querySelector(".display-books");
const addBook = document.querySelector("#add-book");
const bookForm = document.querySelector("#book-form");

// Initialise Array for Books
let myLibrary = [];

// Constructor for Book objects
function Book (title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;

}

addBook.addEventListener("click", () => {
    bookForm.style.display = "block";
})

bookForm.addEventListener("submit", () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let book = new Book(title, author, year, pages, read);

    myLibrary.push(book);

})
