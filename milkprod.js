function searchTable() {
	var input, filter, table, tr, td, i, j, visible;
	input = document.getElementById("search-input");
	filter = input.value.toUpperCase();
	table = document.getElementById("milk-table");
	tr = table.getElementsByTagName("tr");
	for (i = 1; i < tr.length; i++) {
		visible = false;
		td = tr[i].getElementsByTagName("td");
		for (j = 0; j < td.length; j++) {
			if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
				visible = true;
				break;
			}
		}
		tr[i].style.display = visible ? "" : "none";
	}
}

function addRow() {
	var table = document.getElementById("milk-table");
	var newRow = table.insertRow(-1);
	var cells = ["cow-name", "cow-id", "milk-am", "milk-noon", "milk-pm", "milk-total", "delete-button"];
	for (var i = 0; i < cells.length; i++) {
		var newCell = newRow.insertCell(i);
		if (cells[i] === "delete-button") {
			newCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
		} else {
			newCell.innerHTML = '<input type="text" name="' + cells[i] + '">';
		}
	}
}

function deleteRow(btn) {
	var row = btn.parentNode.parentNode;
	row.parentNode.removeChild(row);
}
