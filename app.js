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
      <th>${book.title}</th
      <th>${book.author}</th>
      <th>${book.isbn}</th>
      <th><a href="#" class="form-link">x</a></th>
      `;

      list.appendChild(row);
  };
  UI.prototype.clearFields = function() {
    let title = document.getElementById("title").value = ''; 
    let author = document.getElementById("author").value = '';
    let isbn = document.getElementById("isbn").value = '';
  }
  UI.prototype.showMessage = function(message, status) {
    let container = document.querySelector(".container");
    let form = document.getElementById("book-form");
    let info = document.createElement("div");
    info.textContent = message;
    info.classList.add(status); 
    container.insertBefore(info, form);

    setTimeout(function(){ 
      info.remove(); 
    }, 3000);
  }


document.getElementById("book-form").addEventListener("submit", function(e) {

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;


  const book = new Book(title, author, isbn);

  const ui =new UI();
  if (book.title == "" || book.author == ""|| book.isbn == "") {
    ui.showMessage("Fill all fields", "error");
  } else {
    ui.addBook(book);
    ui.clearFields();
    ui.showMessage("Book added to the list", "success");
  }
  
  e.preventDefault();
});

  document.getElementById("book-list").addEventListener("click", function(e) {
  let link = document.querySelector(".form-link");
  if (e.target === link) {
    e.target.parentElement.parentElement.remove();
  }
});
