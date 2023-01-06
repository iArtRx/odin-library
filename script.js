// DOM Selectors
const container = document.querySelector(".container");
const bookDisplay = document.querySelector(".display-books");
const addBook = document.getElementById("add-book");
const bookForm = document.getElementById("book-form");

// Initialise Array for Books
let myLibrary = [];

// Class and constructor for Book
class Book {
    constructor(title, author, year, pages, read) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.read = read;
    }
}

addBook.addEventListener("click", () => {
    bookForm.style.display = "flex";
    bookDisplay.style.opacity = "0.5";
    addBook.style.visibility = "hidden";

})

bookForm.addEventListener("submit", (e) => {

    e.preventDefault();
    
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let book = new Book(title, author, year, pages, read);

    myLibrary.push(book);

    updateLibrary();

    bookForm.style.display = "none";
    bookDisplay.style.opacity = "1";
    addBook.style.visibility = "visible";
    
});

// Close the form if click outside
container.addEventListener("click", (e) => {
    if (!e.target.closest("#book-form") && e.target !== addBook) {
        bookForm.style.display = "none";
        bookDisplay.style.opacity = "1";
        addBook.style.visibility = "visible";
    }
});

createBookCard = (book) => {

    let bookCard = document.createElement("div");
    // Add book class to each book object
    bookCard.classList.add("book");

    // Append object properties to div
    let title = document.createElement("h3");
    title.textContent = book.title;
    bookCard.appendChild(title);

    let author = document.createElement("p");
    author.textContent = book.author;
    bookCard.appendChild(author);

    let year = document.createElement("p");
    year.textContent = `Published in ${book.year}`;
    bookCard.appendChild(year)

    let pages = document.createElement("p");
    pages.textContent = `${book.pages} pages`;
    bookCard.appendChild(pages);

    // Button based on boolean value which can be toggled
    let readButton = document.createElement("button");
    let isRead = book.read;    
    readButton.textContent = isRead ? "Read" : "Unread";
    readButton.style.backgroundColor = isRead ? "#d0fcad" : "#fcc5ad";
    bookCard.appendChild(readButton);

    readButton.addEventListener("click", () => {
        isRead = !isRead;
        readButton.textContent = isRead ? "Read" : "Unread";
        readButton.style.backgroundColor = isRead ? "#d0fcad" : "#fcc5ad";
    });

    // Button to remove book object from the array
    let deleteBook = document.createElement("button");
    deleteBook.textContent = "Delete Book";
    bookCard.appendChild(deleteBook);

    deleteBook.addEventListener("click", () => {
        let bookIndex = myLibrary.indexOf(book);
        myLibrary.splice(bookIndex, 1)
        updateLibrary();
    });

    return bookCard;
}

// Iterate over myLibrary array to append each card to display

updateLibrary = () => {
    bookDisplay.innerHTML = "";

    // Sort myLibrary alphabetically by title
    myLibrary.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1);

    for (book of myLibrary) {
    
        let bookCard = createBookCard(book);
        bookDisplay.appendChild(bookCard);
    }
}

let book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', "1925", "180", true);
let book2 = new Book('To Kill a Mockingbird', 'Harper Lee', "1960", "281", false);
let book3 = new Book('Pride and Prejudice', 'Jane Austen', "1813", "278", true);

myLibrary.push(book1, book2, book3);

updateLibrary();
