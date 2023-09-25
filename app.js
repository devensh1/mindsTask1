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
//$ is for fetching data directly//
$(document).ready(function () {
  var table = $(".table");
  var addRowButton = $("#addRowButton");
  var deleteRowButton = $("#delete-row-button");

  if (addRowButton.length) {
    addRowButton.on("click", function () {
      // Create a new row and cells
      var newRow = $("<tr></tr>");
      for (var i = 0; i < 17; i++) {
        // Create 17 cells for each row
        var cell = $("<td></td>");
        var input = $("<input>").css({
          border: "none",
          resize: "none",
          height: "1vh",
          width: "5vw",
          padding: "-10px",
        });

        cell.append(input);
        if (i === 15) {
          // For the "Status" column, create a select dropdown
          var select = $("<select></select>").html(
            '<option value="volvo">Active</option><option value="saab">Not Active</option><option value="mercedes">Pending</option>'
          );
          cell.append(select);
        }
        newRow.append(cell);
      }
      table.append(newRow);
    });
  }

  if (deleteRowButton.length) {
    deleteRowButton.on("click", function () {
      var rowCount = table.find("tr").length;
      if (rowCount > 0) {
        table.find("tr:last").remove(); // Delete the last row
      }
    });
  }
});







