function calculateReturnDate() {
    var selectedBook = document.getElementById("book-dropdown").value; var returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 15); document.getElementById("return-date").value = returnDate.toDateString();
    }
    function displayMessage() {
    var borrowerName = document.getElementById("borrower-name").value; var selectedBook = document.getElementById("book-dropdown").value; var returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 15);
    var message = "Thank you " + borrowerName + ". You borrowed the book " + selectedBook + ". You must return on or before " + returnDate.toDateString();
    document.getElementById("message").innerText = message; document.getElementById("message").classList.remove("hidden");
    }
    