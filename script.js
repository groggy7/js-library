let nextId = 0;
function Book(name, author, year, pages) {
  this.id = nextId++;
  this.name = name;
  this.author = author;
  this.year = year;
  this.pages = pages;
}

const myLibrary = [
    new Book("Martin Eden", "Jack London", "1909", 393),
    new Book("Random Book", "Random Author", "Random Year", 543)
];

const openModal = document.querySelector("#openModal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");;

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
    const bookContainer = document.querySelector(".book-container");
    bookContainer.innerHTML = myLibrary.map(book => `
      <div class="card">
        <img src="img/cover1.png" alt="book cover" class="book-cover">
        <p>Book name: ${book.name}</p>
        <p>Book's author: ${book.author}</p>
        <p>Book's year: ${book.year}</p>
        <p>Book's page: ${book.pages}</p>
        <button class="delete-book" data-id="${book.id}">Delete the book</button>
      </div>
    `).join('');
    addDeleteListeners();
  }
display();

function deleteBook(id) {
    const index = myLibrary.findIndex(book => book.id === parseInt(id));
    if (index === -1) {
        console.log('Book not found');
        return;
    }
    myLibrary.splice(index, 1);
    display();
}

function addDeleteListeners() {
    const deleteButtons = document.querySelectorAll('.delete-book');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            deleteBook(event.target.dataset.id);
        });
    });
}
