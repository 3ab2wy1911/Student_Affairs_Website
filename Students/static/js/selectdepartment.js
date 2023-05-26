// let url = new URLSearchParams(location.studentinfo);
// studentID = url.get("ID");

// Get the URL parameters
let urlParams = new URLSearchParams(window.location.search);

// Retrieve the values from the parameters
let name = urlParams.get("name");
let id = urlParams.get("id");
// let param3 = urlParams.get("param3");

// Populate the fields with the retrieved values
document.getElementById("name").value = name;
document.getElementById("ID").value = id;
// document.getElementById("Dep").value = param3;

let students = [];
let studentName = '';
if (localStorage.getItem("Students") === null) {
    Students = [];
} else {
    Students = JSON.parse(localStorage.getItem("Students"));
}

// Students.forEach((student)=>{
//     if(parseInt(student.ID) === parseInt(id)){
//         studentName = student.Name;
//     }
// })
// document.getElementById("name").value = studentName;
// document.getElementById("ID").value = studentID;
// console.log(studentID);
// console.log(studentName);
function setDepartment() {
    let option = document.getElementById("Dep").value;
    if (option !== "NONE") {
        Students.forEach((student) => {
            if (parseInt(student.ID) === parseInt(id)) {
                student.Department = option;
                localStorage.setItem("Students", JSON.stringify(Students));
                location.href = "studentList.html";
            }
        })
    }
}