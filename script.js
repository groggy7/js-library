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

function Book(index, name, author, year, pages) {
  this.index = index
  this.name = name
  this.author = author
  this.year = year
  this.pages = pages
}

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
    bookContainer.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        
        const card = document.createElement("card");
        card.className = "card";
        card.innerHTML = `
        <img src="img/cover1.png" alt="book cover" class="book-cover">
        <p>Book name: ${book.name}</p>
        <p>Book's author: ${book.author}</p>
        <p>Book's year: ${book.year}</p>
        <p>Book's page: ${book.pages}</p>`;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete the book";
        deleteButton.className = "delete-book";
        deleteButton.setAttribute("data-index", i)

        deleteButton.addEventListener("click", () => {
            deleteBook(book.index);
        });
        card.appendChild(deleteButton);
        
        bookContainer.appendChild(card);
    }
    addListeners(); 
}

display();

function deleteBook(index) {
    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].index == index) {
            myLibrary.splice(i, 1);
        }
    }

    display();
}

function addListeners() {
    const deleteButtons = document.querySelectorAll('.delete-book');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            console.log(index); 
            deleteBook(index);
        });
    });
}
