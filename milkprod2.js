const table = document.querySelector('table');
const addBtn = document.querySelector('#add-btn');
const searchInput = document.querySelector('#search-input');
const sortSelect = document.querySelector('#sort-select');
const inputs = document.querySelectorAll('.my-input-class');
let sum = 0;
inputs.forEach(input => {
  sum += Number(input.value);
});
console.log(sum);

table.addEventListener('input', (e) => {
	if (e.target.name === 'milk-am' || e.target.name === 'milk-noon' || e.target.name === 'milk-pm') {
		const tr = e.target.parentElement.parentElement;
		const milkAM = Number(tr.querySelector('input[name="milk-am"]').value);
		const milkNoon = Number(tr.querySelector('input[name="milk-noon"]').value);
		const milkPM = Number(tr.querySelector('input[name="milk-pm"]').value);
		const milkTotal = milkAM + milkNoon + milkPM;
		tr.querySelector('input[name="milk-total"]').value = milkTotal;
	}
});

// Add a new row to the table
addBtn.addEventListener('click', () => {
	const newRow = table.insertRow(-1);
	newRow.innerHTML = `
		<td><input type="text" name="cow-name"></td>
		<td><input type="text" name="cow-id"></td>
		<td><input type="number" name="milk-am"></td>
		<td><input type="number" name="milk-noon"></td>
		<td><input type="number" name="milk-pm"></td>
		<td><input type="number" name="milk-total" readonly></td>
	`;
});

// Sort the rows in the table
sortSelect.addEventListener('change', () => {
	const sortIndex = sortSelect.selectedIndex;
	const rows = Array.from(table.rows).slice(1);
	if (sortIndex === 1) {
		rows.sort((a, b) => {
			const cowNameA = a.querySelector('input[name="cow-name"]').value.toLowerCase();
			const cowNameB = b.querySelector('input[name="cow-name"]').value.toLowerCase();
			return cowNameA.localeCompare(cowNameB);
		});
	} else if (sortIndex === 2) {
		rows.sort((a, b) => {
			const cowIDA = Number(a.querySelector('input[name="cow-id"]').value);
			const cowIDB = Number(b.querySelector('input[name="cow-id"]').value);
			return cowIDA - cowIDB;
		});
	}
	table.tBodies[0].append(...rows);
});

// Search for a cow by name
searchInput.addEventListener('keyup', () => {
	const query = searchInput.value.toLowerCase();
	const rows = Array.from(table.rows).slice(1);
	rows.forEach((row) => {
		if (row.innerHTML.toLowerCase().includes(query)) {
			row.style.display = '';
		} else {
			row.style.display = 'none';
		}
	});
});