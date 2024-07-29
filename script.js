const myLibrary = [
    {
        name: "Martin Eden",
        author: "Jack London",
        year: "1909"
    },
    {
        name: "Random Book",
        author: "Random Author",
        year: "Random Year"
    }
];

function Book(name, author, year) {
  this.name = name
  this.author = author
  this.year = year
}

function addBookToLibrary() {
    name = prompt("enter book name: ")
    author = prompt("enter author's full name: ")
    year = prompt("enter book year: ")

    book = new Book(name, author, year)
    myLibrary.push(book)
}

function display() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        
        const card = document.createElement("card");
        card.className = "card"
        card.innerText = `
        Book name: ${book.name}
        Book's author: ${book.author}
        Book's year: ${book.year}
        `
        
        const libraryElem = document.querySelector(".library");
        libraryElem.appendChild(card);
    }
}

display();