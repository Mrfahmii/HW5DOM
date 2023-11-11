document.getElementById("myDiv").style.margin = "10px";

function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Gather user input
  var nama = document.getElementById("validationServer03").value;
  var umur = document.getElementById("validationServer04").value;
  var uangSangu = document.getElementById("validationServer05").value;

  // Update the table and calculate averages
  updateTable(nama, umur, uangSangu);
}

function updateTable(nama, umur, uangSangu) {
  // Get the table body
  var tableBody = document.getElementsByTagName("tbody")[0];

  // Create a new row
  var newRow = tableBody.insertRow();

  // Insert cells with user input
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = tableBody.rows.length;

  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = nama;

  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = umur;

  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = uangSangu;

  // Update the resume section
  updateResume();
}

function updateResume() {
  // Get all rows in the table
  var tableRows = document.getElementsByTagName("tbody")[0].rows;

  // Calculate averages
  var totalUangSangu = 0;
  var totalUmur = 0;

  for (var i = 0; i < tableRows.length; i++) {
    totalUangSangu += parseInt(tableRows[i].cells[3].innerHTML);
    totalUmur += parseInt(tableRows[i].cells[2].innerHTML);
  }

  var averageUangSangu = totalUangSangu / tableRows.length;
  var averageUmur = totalUmur / tableRows.length;

  // Update the resume section
  document.getElementById("resumeText").innerHTML =
    "Rata-rata pendaftar memiliki uang sangu sebesar " +
    averageUangSangu +
    " dengan rata-rata umur " +
    averageUmur;
}
