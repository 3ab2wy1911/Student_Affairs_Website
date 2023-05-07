
let Students = [];
if (localStorage.getItem("Students") === null) {
    Students = [];
} else {
    Students = JSON.parse(localStorage.getItem("Students"));
}
let table = document.getElementById("list");

Students.forEach((student) => {

    let row11 = table.insertRow();
    let name11 = row11.insertCell(0);
    let id11 = row11.insertCell(1);
    let gender11 = row11.insertCell(2);
    let gpa11 = row11.insertCell(3);
    let level11 = row11.insertCell(4);
    let department11 = row11.insertCell(5);
    let status11 = row11.insertCell(6);

    name11.innerHTML = `<a class="Link" href="studentinfo.html">${student.Name}</a>`;
    id11.innerHTML = student.ID;
    gender11.innerHTML = student.Gender;
    gpa11.innerHTML = student.GPA;
    level11.innerHTML = student.Level;
    department11.innerHTML = student.Department;
    status11.innerHTML = student.Status;

    if (student.Level == 3 && student.Department == "general") {
        let button = row11.insertCell(7);
        button.innerHTML = `<button class="assign_button" id=`+student.ID+` onclick="selectDepartment(`+student.ID+`);">Assign Department</button>`;
    }
});


const genderFilter = document.getElementById("Gender");
const levelFilter = document.getElementById("Level");
const departmentFilter = document.getElementById("Department");
const statusFilter = document.getElementById("Status");

genderFilter.addEventListener("change", updateTable);
levelFilter.addEventListener("change", updateTable);
departmentFilter.addEventListener("change", updateTable);
statusFilter.addEventListener("change", updateTable);

function updateTable() {

    const genderValue = genderFilter.value;
    const levelValue = levelFilter.value;
    const departmentValue = departmentFilter.value;
    const statusValue = statusFilter.value;

    const filteredStudents = Students.filter((student) => {
        return (
            (genderValue === "" || student.Gender === genderValue) &&
            (levelValue === "" || student.Level == levelValue) &&
            (departmentValue === "" || student.Department === departmentValue) &&
            (statusValue === "" || student.Status === statusValue)
        );
    });
    let table = document.getElementById("list");
    let tbody = table.querySelector("tbody");
    tbody.innerHTML = "";
    filteredStudents.forEach((student) => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell();
        nameCell.innerHTML = `<a class="Link" href="studentinfo.html">${student.Name}</a>`;
        row.insertCell().textContent = student.ID;
        row.insertCell().textContent = student.Gender;
        row.insertCell().textContent = student.GPA;
        row.insertCell().textContent = student.Level;
        row.insertCell().textContent = student.Department;
        row.insertCell().textContent = student.Status;

        nameCell.addEventListener('click', function () {
            localStorage.setItem('selectedStudentId', student.ID);
            location.href = 'studentinfo.html';
        });
    });
}

function selectDepartment(id){
    Students.forEach((student) => {
        if(student.ID == id){
            sessionStorage.setItem("name", student.Name);
            sessionStorage.setItem("ID", id);
        }
    });
    location.href = "selectdepartment.html";
}