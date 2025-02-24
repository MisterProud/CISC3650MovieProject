document.addEventListener("DOMContentLoaded", () => {
    loadDefaultEntries();
});

function loadDefaultEntries() {
    let defaultBooks = [
        { title: "Pendragon: The Merchant of Death", genre: "Science Fiction", author: "D. J. MacHale", status: "To Read", rating: "N/A" },
        { title: "Pendragon: The Lost City of Faar", genre: "Science Fiction", author: "D. J. MacHale", status: "To Read", rating: "N/A" }
    ];

    defaultBooks.forEach(book => addEntryToTable(book));
}

function addEntry() {
    let title = document.getElementById('title').value;
    let genre = document.getElementById('genre').value;
    let author = document.getElementById('author').value;
    let status = document.getElementById('status').value;
    let rating = document.getElementById('rating').value || 'N/A';

    if (!title || !genre || !author) {
        alert('Please enter title, genre, and author');
        return;
    }

    let book = { title, genre, author, status, rating };
    addEntryToTable(book);

    document.getElementById('title').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('author').value = '';
    document.getElementById('rating').value = '';
}

function addEntryToTable(book) {
    let table = document.getElementById('logTable');
    let row = table.insertRow();
    row.innerHTML = `<td>${book.title}</td>
                     <td>${book.genre}</td>
                     <td>${book.author}</td>
                     <td><select class="form-select" onchange="changeStatus(this)">
                         <option value="to-read" ${book.status === "To Read" ? "selected" : ""}>To Read/Watch</option>
                         <option value="in-progress" ${book.status === "In Progress" ? "selected" : ""}>In Progress</option>
                         <option value="completed" ${book.status === "Completed" ? "selected" : ""}>Completed</option>
                     </select></td>
                     <td>${book.rating}</td>
                     <td><button class="btn btn-danger" onclick="deleteEntry(this)">Delete</button></td>`;
}

function deleteEntry(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}

function searchEntries() {
    let searchValue = document.getElementById('search').value.toLowerCase();
    let rows = document.querySelectorAll('#logTable tr');

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(searchValue) ? '' : 'none';
    });
}
