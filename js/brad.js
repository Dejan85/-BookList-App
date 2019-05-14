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
      },
      {
        title: 'Book two',
        author: 'Sara Doe',
        isbn: '3234234234'
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
          <td><a href="#" class="table-button">X</a></td>
        `;

    list.appendChild(row);
  }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book

// Event: Remove a Book
