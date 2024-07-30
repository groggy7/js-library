const myLibrary = [
    {
        index: 0,
        name: "Martin Eden",
        author: "Jack London",
        year: "1909",
        pages: 393
    },
    {
        index: 1,
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
const closeBtn = document.querySelector(".close");
const deleteBookButton = document.querySelector(".delete-book")

openModal.addEventListener("click", () => {
    modal.showModal();
});

closeBtn.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        modal.close();
    }
});

function display() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        
        const card = document.createElement("card");
        card.className = "card"
        card.innerHTML = `
        <img src="img/cover1.png" alt="book cover" class="book-cover">
        <p>Book name: ${book.name}</p>
        <p>Book's author: ${book.author}</p>
        <p>Book's year: ${book.year}</p>
        <p>Book's page: ${book.pages}</p>
    `;
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete the book"
        deleteButton.className = "delete-book"
        card.appendChild(deleteButton)

        const libraryElem = document.querySelector(".library");
        libraryElem.insertBefore(card, openModal)
    }
}

display();