var element = document.querySelector(".left");

if (element) {
    element.style.color = 'white';
}

var elements = document.querySelector(".right");

if (elements) {
    elements.style.color = 'white';
}

// Create a button element
var element = document.querySelector(".left");

if (element) {
  element.style.color = "white";
}

var elements = document.querySelector(".right");

if (elements) {
  elements.style.color = "white";
}

// Get references to the table and the button
var table = document.querySelector(".table");
var addRowButton = document.getElementById("addRowButton");

if (addRowButton) {
  addRowButton.addEventListener("click", function () {
    // Create a new row and cells
    var newRow = table.insertRow(-1); // -1 inserts the row at the end of the table
    for (var i = 0; i < 17; i++) {
      // Create 17 cells for each row
      var cell = newRow.insertCell(i);
      var input = document.createElement("input");
      input.style.border = "none";
      input.style.resize = "none";
      cell.appendChild(input);
      if (i === 15) {
        // For the "Status" column, create a select dropdown
        var select = document.createElement("select");
        select.innerHTML =
          '<option value="volvo">Active</option><option value="saab">Not Active</option><option value="mercedes">Pending</option>';
        cell.appendChild(select);
      }
    }
  });
}


