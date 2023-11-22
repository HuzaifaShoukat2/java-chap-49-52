
////////////////////// <!-- Question No 1 Script For displaying Form Data In WebBrowser -->/////////////////////////
  function submitForm(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    var displayData = document.getElementById("displayData");
    displayData.innerHTML += `
    
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <hr>
  `;

    // Reset the form
    document.getElementById("signupForm").reset();

    // Hide the form and display the data container
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("displayDataContainer").style.display = "block";
  }

  function toggleForm() {
    // Show the form and hide the display data container
    document.getElementById("formContainer").style.display = "block";
    document.getElementById("displayDataContainer").style.display = "none";
  }



/////////////////////// <!-- Question No 2 Script For Read More /Read Less For Log Paragraphs -->//////////////////////

  function readMore() {
    var moreText = document.getElementById("more");
    var readText = document.getElementById("readMore");

    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      readText.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      readText.innerHTML = "Read More";
    }
  }

///////////////////////// <!-- Question No 3 Script Of Editable Student Data TAble -->////////////////////////


//<========Including Total Of 5 Function Adding rows, Edit Data, Add Data, Delete row & Cancel Edit =========>//

// For Adding A New Rows
function addStudent() {
    var table = document
      .getElementById("studentTable")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = '<input type="text" placeholder="Student Name">';
    cell2.innerHTML = '<input type="text" placeholder="Father\'s Name">';
    cell3.innerHTML = '<input type="text" placeholder="Class">';
    cell4.innerHTML = '<input type="text" placeholder="Age">';
    cell5.innerHTML =
      '<button onclick="editStudent(this)" id="editbtn">Edit</button> <button onclick="deleteStudent(this)" id="delbtn">Delete</button> <button onclick="checkStudent(this)" id="addBtn">Add</button>';
  }
// For Edit Details Of A student
  function editStudent(button) {
    var row = button.parentNode.parentNode;
    for (var i = 0; i < 4; i++) {
      row.cells[i].innerHTML =
        '<input type="text" value="' + row.cells[i].innerText + '">';
    }
    row.cells[4].innerHTML =
      '<button onclick="cancelEdit(this)"  id="delbtn">Cancel</button> <button onclick="checkStudent(this)" id="addBtn">Add</button>';
  }

  // For Cancel Edit 
  function cancelEdit(button) {
    var row = button.parentNode.parentNode;
    for (var i = 0; i < 4; i++) {
      row.cells[i].innerHTML =
        row.cells[i].getElementsByTagName("input")[0].value;
    }
    row.cells[4].innerHTML =
      '<button onclick="editStudent(this)"  id="editbtn">Edit</button> <button onclick="deleteStudent(this)"  id="delbtn">Delete</button>';
  }

// For Add Student Data
  function checkStudent(button) {
    var row = button.parentNode.parentNode;
    for (var i = 0; i < 4; i++) {
      var inputValue = row.cells[i].getElementsByTagName("input")[0].value;
      row.cells[i].innerHTML = inputValue;
    }
    row.cells[4].innerHTML =
      '<button onclick="editStudent(this)"  id="editbtn">Edit</button> <button onclick="deleteStudent(this)"  id="delbtn">Delete</button>';
  }

// For Del Student Data 
  function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }