//your JS code here. If required.
document.getElementById('book-form').addEventListener('submit', function(e) {
            e.preventDefault();
            let title = document.getElementById('title').value;
            let author = document.getElementById('author').value;
            let isbn = document.getElementById('isbn').value;

            // Add the book to the table
            addBookToList(title, author, isbn);

            // Clear the form inputs
            document.getElementById('book-form').reset();
        });

        function addBookToList(title, author, isbn) {
            let tbody = document.getElementById('book-list');
            let row = tbody.insertRow();
            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="btn btn-danger delete">Clear</button></td>
            `;

            // Attach event listener for the delete button
            let deleteButton = row.querySelector('.delete');
            deleteButton.addEventListener('click', function() {
                row.remove();
            });
        }