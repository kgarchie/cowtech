// global variables
let currentPage = 1;
const rowsPerPage = 10;
const tableRows = document.querySelectorAll('#milk-table tbody tr');
const totalPages = Math.ceil(tableRows.length / rowsPerPage);
const prevBtn = document.getElementById('prev

Btn');
const nextBtn = document.getElementById('nextBtn');

// function to display the current page
function displayRows() {
const start = (currentPage - 1) * rowsPerPage;
const end = start + rowsPerPage;

tableRows.forEach((row, index) => {
if (index >= start && index < end) {
row.style.display = 'table-row';
} else {
row.style.display = 'none';
}
});
}

// function to update page buttons
function updateButtons() {
if (currentPage === 1) {
prevBtn.disabled = true;
} else {
prevBtn.disabled = false;
}

if (currentPage === totalPages) {
nextBtn.disabled = true;
} else {
nextBtn.disabled = false;
}
}

// function to go to previous page
function prevPage() {
if (currentPage > 1) {
currentPage--;
displayRows();
updateButtons();
}
}

// function to go to next page
function nextPage() {
if (currentPage < totalPages) {
currentPage++;
displayRows();
updateButtons();
}
}

// add event listeners to buttons
prevBtn.addEventListener('click', prevPage);
nextBtn.addEventListener('click', nextPage);

// display initial rows and update buttons
displayRows();
updateButtons();