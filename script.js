const myLibrary = [
    {
        name: "Martin Eden",
        author: "Jack London",
        year: "1909",
        pages: 393
    },
    {
        name: "Random Book",
        author: "Random Author",
        year: "Random Year",
        pages: 543
    }
];

function Book(name, author, year, pages) {
  this.name = name
  this.author = author
  this.year = year
  this.pages = pages
}

const openModal = document.querySelector("#openModal")
const modal = document.querySelector(".modal")
openModal.addEventListener("click", () => {
    modal.showModal();
})

function display() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        
        const card = document.createElement("card");
        card.className = "card"
        card.innerText = `
        Book name: ${book.name}
        Book's author: ${book.author}
        Book's year: ${book.year}
        Book's page: ${book.pages}
        `
        
        const libraryElem = document.querySelector(".library");
        libraryElem.insertBefore(card, openModal)
    }
}


display();