function onclickName(event) {
  event.preventDefault();
  let el = document.querySelector("#name");
  el.removeAttribute("disabled");
  let el2=document.getElementById("edit_name");
  // el2.setAttribute("disabled", "disabled");
  let students = JSON.parse(localStorage.getItem("Students")) || [];
        students.forEach((student) => {
          if (student.ID === Value) {
           student.Name = document.getElementById("name");
          }})
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
  if(parseInt(level) == 3){
    
  };
}
//________________________________________________________________
function validation()
{
    //name validation:
    var name= document.getElementById("name").value;
    var regex=/^([a-zA-Z]+)\s([a-zA-Z]+)$/
    if (!regex.test(name))
    {
        alert("Please enter a valid name");
        return false;
    }

    //id validation:
    var id= document.getElementById("ID").value;
    var idreg=/^\d{8}$/;
    if (!idreg.test(id))
    {
        alert("Please enter a valid id which's only about 8 numbers");
        return false;
    }

    //gpa validation:
    var gpa= document.getElementById("GPA").value;
    var gpareg=/^[0-5].\d{2}?$/;
    if (!gpareg.test(gpa))
    {
        alert("Please enter a valid gpa which's range from 0 to 5 and up to 2 decimal digits is valid");
        return false;
    }

    //phone validation:
    var phone= document.getElementById("phoneno").value;
    var phonereg=/^01[1250]\d{8}$/
    if (!phonereg.test(phone))
    {
        alert("Please enter a valid phone number which starts with 01 followed by 9 numbers");
        return false;
    }

    // //email validation:
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+\.[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) 
    {
      alert("Please enter a valid email address that follows this format: Student@stud.uniabb.edu.eg");
      return false;
    }

    //date validation:
    var date = new Date(document.getElementById("date").value);
    var minDate = new Date("1999-01-01");
    var maxDate = new Date("2006-12-31");

    if (date < minDate || date > maxDate) {
        alert("Please enter a valid date between 1999 and 2006");
        return false;
    }

    //dept validation:
    var dept= document.getElementById("Departement").value;
    var level= document.getElementById("Level").value;
    if (level<3)
    {
        if (dept!="general")
        {
            alert("Please enter a valid department, where if the level is less than 3 the department MUST be general");
            return false;
        }
    }
    else if (level>=3)
    {
        if (dept=="general")
        {
            alert("Please enter a valid department, where if the level is greater than or equal 3 the department MUST NOT be general");
            return false;
        }
    }
    return true;

}
//_______________________________________________________________
function updateData (event){
  event.preventDefault();
  var id = document.getElementById("ID");
  var name = document.getElementById("name");
  var date = document.getElementById("date");
  var gpa = document.getElementById("GPA");
  var gender = document.getElementById("Gender");
  var level = document.getElementById("Level");
  var status = document.getElementById("Status");
  var dep = document.getElementById("Department");
  var email = document.getElementById("email");
  var mobile = document.getElementById("phoneno");

  let students = JSON.parse(localStorage.getItem("Students")) || [];

        students.forEach((student) => {
          if (parseInt(student.ID) == Value) {
            student.Name = name.value;
            student.ID = id.value;
            student.DateOfBirth = date.value;
            student.Email = email.value;
            student.phonPhoneNumbere = mobile.value;
            student.Department = dep.value;
            student.GPA = gpa.value;
            student.Level = level.value;
            student.Gender = gender.value;
            student.status = status.value;
          };})
    window.location.href = "search.html";
}
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


