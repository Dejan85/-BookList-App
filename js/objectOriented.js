// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Task
class UI {
  static displayBooks() {
    const StoriedBooks = [
      {
        title: 'Book one',
        author: 'Jhon Doe',
        isbn: '342342'
      },
      {
        title: 'Book two',
        author: 'Dejan Doe',
        isbn: '34343'
      }
    ];

    const books = StoriedBooks;

    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="table-button delete">X</a></td>
        `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showALert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.col-1-of-1');
    const form = document.querySelector('.form');
    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();
  //Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Validate
  if (title === '' || author === '' || isbn === '') {
    return UI.showALert('Please fill in all fields', 'error');
  }
  //Instatieate book
  const book = new Book(title, author, isbn);

  // Add Book to UI
  UI.addBookToList(book);

  // Show success message
  UI.showALert('Book Added', 'success');

  //Clear filds
  UI.clearFields();
});

// Event: Remove a Book
document.querySelector('.book-list').addEventListener('click', e => {
  UI.deleteBook(e.target);

  // Remove book message
  UI.showALert('Book Removed', 'remove');
});
