function searchFunction() {
  var input, filter, table, tr, td, i, txtValue, searchByName;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  table = document.getElementsByClassName("search-table")[0];
  tr = table.getElementsByTagName('tr');
  searchByName = document.getElementById('option-1').checked;
  
  table.style.display = "table";

  for (i = 0; i < tr.length; i++) {
    if (searchByName) {
      td = tr[i].getElementsByTagName("td")[0];
    } else {
      td = tr[i].getElementsByTagName("td")[1];
    }
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}




function displayData() {
  let Students = JSON.parse(localStorage.getItem("Students"));

  let tableBody = document.getElementById("table-body");
  let count = 0;
  
  Students.forEach(function(student) {
    let row = tableBody.insertRow(-1);

    let nameCell = row.insertCell(0);
    nameCell.innerHTML = `<a href="studentinfo.html?name=${encodeURIComponent(student.Name)}
    &ID=${encodeURIComponent(student.ID)}
    &gpa=${encodeURIComponent(student.GPA)}
    &Level=${encodeURIComponent(student.Level)}
    &Departement=${encodeURIComponent(student.Department)}
    &Gender=${encodeURIComponent(student.Gender)}
    &status=${encodeURIComponent(student.Status)}
    &phoneno=${encodeURIComponent(student.PhoneNumber)}
    &date=${encodeURIComponent(student.DateOfBirth)}
    &email=${encodeURIComponent(student.Email)}">${student.Name}</a>`;

    let idCell = row.insertCell(1);
    idCell.innerHTML = student.ID;

    let levelCell = row.insertCell(2);
    levelCell.innerHTML = student.Level;

    let deptCell = row.insertCell(3);
    deptCell.innerHTML = student.Department;

    let statusCell = row.insertCell(4);
    statusCell.innerHTML = student.Status;
    count ++;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  displayData();
});