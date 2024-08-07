class Book {
    static id = 0;
    constructor(name, author, year, pages) {
        this.id = Book.id++;
        this.name = name;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.read = false;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

const myLibrary = [
    new Book("Martin Eden", "Jack London", "1909", 393),
    new Book("Random Book", "Random Author", "Random Year", 543)
];

const openModal = document.querySelector("#openModal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

const bookForm = document.querySelector(".book-form");
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    const pages = document.getElementById("pages").value;

    addBook(new Book(name, author, year, pages));
    modal.close();
    resetForm();
});

function resetForm() {
    ['name', 'author', 'year', 'pages'].forEach(id => {
        document.getElementById(id).value = '';
    });
}

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
        <button class="delete-book btn" data-id="${book.id}">Delete the book</button>
        <button class="toggle-read btn" data-id="${book.id}" 
        style="background-color: ${book.read ? 'green' : 'red'}">${book.read ? "Read" : "Not Read"}
        </button>
      </div>
    `).join('');
    addEventListeners();
}
display();

function addBook(book) {
    myLibrary.push(book);
    display();
}

function deleteBook(id) {
    const index = myLibrary.findIndex(book => book.id === parseInt(id));
    if (index !== -1) {
        myLibrary.splice(index, 1);
        display();
    }
}

function addEventListeners() {
    const deleteButtons = document.querySelectorAll('.delete-book');
    const toggleButtons = document.querySelectorAll(".toggle-read");

    deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            deleteBook(event.target.dataset.id);
        });
    });

    toggleButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const bookId = event.target.dataset.id;
            const book = myLibrary.find(book => book.id === parseInt(bookId));
            book.toggleReadStatus();
            display();
        })
    })
}