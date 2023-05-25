function searchFunction() {
  var input, filter, table, tr, td, i, txtValue, searchByName;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  table = document.getElementsByClassName("search-table")[0];
  tr = table.getElementsByTagName('tr');
  searchByName = document.getElementById('option-1').checked;

  table.style.display = "table"; // Display the table by setting the display property to an empty string

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
