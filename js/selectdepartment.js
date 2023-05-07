let url = new URLSearchParams(location.studentinfo);
studentID = url.get("ID");

let students = [];
let studentName = '';
if (localStorage.getItem("Students") === null) {
    Students = [];
} else {
    Students = JSON.parse(localStorage.getItem("Students"));
}

Students.forEach((student)=>{
    if(student.ID == studentID){
        studentName = student.Name;
    }
})
document.getElementById("name").value = studentName;
document.getElementById("ID").value = studentID;
console.log(studentID);
console.log(studentName);
function setDepartment() {
    let option = document.getElementById("Dep").value;
    if (option != "NONE") {
        Students.forEach((student) => {
            if (student.ID === studentID) {
                student.Department = option;
                localStorage.setItem("Students", JSON.stringify(Students));
                location.href = "studentList.html";
            }
        })
    }
}