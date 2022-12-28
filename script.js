// DOM Selectors
const bookDisplay = document.querySelector(".display-books");
const addBook = document.getElementById("add-book");
const bookForm = document.getElementById("book-form");

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
    bookDisplay.style.display = "none";
})

bookForm.addEventListener("submit", () => {
    
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    console.log(title, author, year, pages, read);

    let book = new Book(title, author, year, pages, read);

    console.log(book);
    console.log(myLibrary);

    myLibrary.push(book);

    console.log(myLibrary);

})

createBookCard = (book) => {
    let bookCard = document.createElement("div");
    // Add book class to each book object
    bookCard.classList.add("book");

    let title = document.createElement("h3");
    title.textContent = book.title;
    bookCard.appendChild(title);

    let author = document.createElement("p");
    author.textContent = book.author;
    bookCard.appendChild(author);

    let year = document.createElement("p");
    author.textContent = book.year;
    bookCard.appendChild(year)

    let pages = document.createElement("p");
    pages.textContent = book.pages;
    bookCard.appendChild(pages);

    let read = document.createElement("button");
    read.textContent = "read";
    bookCard.appendChild(read);

    let deleteBook = document.createElement("button");
    deleteBook.textContent = "Delete Book";
    bookCard.appendChild(deleteBook);

    return bookCard;
}


// Iterate over myLibrary array to append each card to display
 

let book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', "1925", "180", true);
let book2 = new Book('To Kill a Mockingbird', 'Harper Lee', "1960", "281", false);
let book3 = new Book('Pride and Prejudice', 'Jane Austen', "1813", "278", true);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

for (book of myLibrary) {
    
    let bookCard = createBookCard(book);
    bookDisplay.appendChild(bookCard);
}

