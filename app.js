function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}



function UI() {}

  UI.prototype.addBook = function(book) {
    let list = document.getElementById("book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
          <th>${book.title}</th>
          <th>${book.author}</th>
          <th>${book.isbn}</th>
          <th><a href="#">x</a></th>
          `;

          list.appendChild(row);

  };
  UI.prototype.clearFields = function() {
    let title = document.getElementById("title").value = ''; 
    let author = document.getElementById("author").value = '';
    let isbn = document.getElementById("isbn").value = '';
  }


document.getElementById("book-form").addEventListener("submit", function(e) {

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;


  const book = new Book(title, author, isbn);

  const ui =new UI();
  ui.addBook(book);

  ui.clearFields();

  e.preventDefault();
})
