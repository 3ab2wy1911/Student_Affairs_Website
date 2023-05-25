function onclickName(event) {
  event.preventDefault();
  let el = document.querySelector("#name");
  el.removeAttribute("disabled");
  let el2=document.getElementById("edit_name");
  el2.setAttribute("disabled", "disabled");
}
//________________________________________________________________
function onclickID(event) {
  event.preventDefault();
  let el = document.querySelector("#ID");
  el.removeAttribute("disabled");
  let el2 = document.getElementById("edit_id");
  el2.setAttribute("disabled", "disabled");
}
//________________________________________________________________
function onclickGpa(event) {
  event.preventDefault();
  let el = document.querySelector("#GPA");
  el.removeAttribute("disabled");
  let el2 = document.getElementById("edit_gpa");
  el2.setAttribute("disabled", "disabled");
}
//________________________________________________________________
function onclickPhone(event) {
  event.preventDefault();
  let el = document.querySelector("#phoneno");
  el.removeAttribute("disabled");
  let el2 = document.getElementById("edit_phone");
  el2.setAttribute("disabled", "disabled");
}
//________________________________________________________________
function onclickEmail(event) {
  event.preventDefault();
  let el = document.querySelector("#email");
  el.removeAttribute("disabled");
  let el2 = document.getElementById("edit_email");
  el2.setAttribute("disabled", "disabled");
}
//________________________________________________________________
function onclickBirth(event) {
  event.preventDefault();
  let el = document.querySelector("#date");
  el.setAttribute ("type" , 'date')
  el.removeAttribute("disabled");
  let el2 = document.getElementById("edit_birth");
  el2.setAttribute("disabled", "disabled");
}
//________________________________________________________________
function onclickGender(event,inputId, selectId){
  event.preventDefault();
  const input = document.getElementById(inputId);
  const select = document.getElementById(selectId);
  const genderOptions = ['male', 'female'];
  for (let i = 0; i < genderOptions.length; i++) {
    const option = document.createElement('option');
    option.value = genderOptions[i];
    option.textContent = genderOptions[i];
    select.appendChild(option);
  }
  const values = input.value.split(',');
  if (values.length > 0) {
    const selectedValue = values[0].trim().toLowerCase();
    if (genderOptions.includes(selectedValue)) {
      select.value = selectedValue;
    }
  }
  select.addEventListener('change', function() {
    input.value = select.value;
  });
  input.style.display = 'none';
  select.style.display = 'inline';
  let el2 = document.getElementById("edit_gender");
  el2.setAttribute("disabled", "disabled");
}
//________________________________________________________________
function onclickLevel(event,inputId,selectId) {
  event.preventDefault();
  const input = document.getElementById(inputId);
  const select = document.getElementById(selectId);
  const levelOptions = ['1','2','3','4'];
  for (let i = 0; i < levelOptions.length; i++) {
    const option = document.createElement('option');
    option.value = levelOptions[i];
    option.textContent = levelOptions[i];
    select.appendChild(option);
  }
  const values = input.value.split(',');
  if (values.length > 0) {
    const selectedValue = values[0].trim().toLowerCase();
    if (levelOptions.includes(selectedValue)) {
      select.value = selectedValue;
    }
  }
  select.addEventListener('change', function() {
    input.value = select.value;
  });


  input.style.display = 'none';
  select.style.display = 'inline';
  let el2 = document.getElementById("edit_level");
  el2.setAttribute("disabled", "disabled");
}
//________________________________________________________________
function onclickStatus(event,inputId,selectId) {
  event.preventDefault();
  const input = document.getElementById(inputId);
  const select = document.getElementById(selectId);
  const statusOptions = ['Active', 'Inactive'];
  for (let i = 0; i < statusOptions.length; i++) {
    const option = document.createElement('option');
    option.value = statusOptions[i];
    option.textContent = statusOptions[i];
    select.appendChild(option);
  }
  const values = input.value.split(',');
  if (values.length > 0) {
    const selectedValue = values[0].trim().toLowerCase();
    if (statusOptions.includes(selectedValue)) {
      select.value = selectedValue;
    }
  }
  select.addEventListener('change', function() {
    input.value = select.value;
  });
  input.style.display = 'none';
  select.style.display = 'inline';
  let el2 = document.getElementById("edit_status");
  el2.setAttribute("disabled", "disabled");
}
//________________________________________________________________
function onclickDepartment(event) {
  event.preventDefault();
  let level = document.getElementById("Level");
  if (parseInt(level.value) === 3) {
    let name = document.getElementById("name").value;
    let id = document.getElementById("ID").value;
    let department = document.getElementById("Departement").value;
    let url = "selectdepartment.html?name=" + encodeURIComponent(name) + "&id=" + encodeURIComponent(id) + "&param3=" + encodeURIComponent(department);
    window.location.href = url;
  } else {
    alert("Can't assign department for this student");
  }
}

//________________________________________________________________

//________________________________________________________________
    function deleteData(event) {
      var Value =parseInt (document.getElementById("ID").value);
      let count =0;
      let k=0;
      event.preventDefault();
      if (confirm("Are you sure you want to delete this data?")) {
        let students = JSON.parse(localStorage.getItem("Students")) || [];
        students.forEach((student) => {
          if (parseInt(student.ID) == Value) {
            k = count;
          }
          count++;})
        let i = parseInt(k);
        students.splice(i, 1);
        localStorage.setItem("Students", JSON.stringify(students));
        window.location.href = "search.html";
      }
    }
//________________________________________________________________
let Students = [];
if (localStorage.getItem('Students')) {
    Students = JSON.parse(localStorage.getItem('Students'));
}
window.Students = Students;
document.addEventListener("DOMContentLoaded", function() {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);

  let nameField = document.getElementById("name");
  let idField = document.getElementById("ID");
  let gpaField = document.getElementById("GPA");
  let phoneField = document.getElementById("phoneno");
  let emailField = document.getElementById("email");
  let levelField = document.getElementById("Level");
  let deptField = document.getElementById("Departement");
  let genderField = document.getElementById("Gender");
  let statusField = document.getElementById("status");
  let dateField = document.getElementById("date");
  
  nameField.value = urlParams.get("name") || "";
  idField.value = urlParams.get("ID") || "";
  levelField.value = urlParams.get("Level") || "";
  gpaField.value = urlParams.get("gpa") || "";
  deptField.value = urlParams.get("Departement") || "";
  genderField.value = urlParams.get("Gender") || "";
  statusField.value = urlParams.get("status") || "";
  dateField.value = urlParams.get("date") || "";
  phoneField.value = urlParams.get("phoneno") || "";
  emailField.value = urlParams.get("email") || "";
  
  // displayData();
});
//________________________________________________________________

function updateData(event) {
  event.preventDefault();
  let id = document.getElementById("ID").value;
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let gpa = document.getElementById("GPA").value;
  let gender = document.getElementById("Gender-select").value;
  let level = document.getElementById("Level-select").value;
  let status = document.getElementById("status-select").value;
  let dep = document.getElementById("Department").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("phoneno").value;

  if (status === "")
    status = document.getElementById("Status").value;
  if (level === "")
    level = document.getElementById("Level").value;
  if (gender === "")
    gender = document.getElementById("Gender").value;

  Students.forEach((student) => {
    if (parseInt(student.ID) === parseInt(id)) {
      student.Name = name;
      student.ID = id;
      student.DateOfBirth = date;
      student.Email = email;
      student.PhoneNumber = mobile;
      student.Department = dep;
      student.GPA = gpa;
      student.Level = level;
      student.Gender = gender;
      student.status = status;
      localStorage.setItem("Students", JSON.stringify(Students));
    }
  });

  alert("Student's info updated successfully");
  window.location.href = "search.html";
}

//_______________________________________________________________
