class Student{
    constructor(Name, ID, DateOfBirth, Status, GPA, Gender, Level, Department, Email, PhoneNumber){
        this.Name = Name;
        this.ID = ID;
        this.DateOfBirth = DateOfBirth;
        this.Status = Status;
        this.GPA = GPA;
        this.Gender = Gender;
        this.Level = Level;
        this.Department = Department;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        // let time = time;
    }
};
let Students = [];
if (localStorage.getItem('Students')) {
    Students = JSON.parse(localStorage.getItem('Students'));
}
window.Students = Students;
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


function myfun()
{
    // time = Date.now();
    let name =  document.getElementById("name").value;
    let id=  document.getElementById("ID").value;
    let gpa= document.getElementById("GPA").value;
    let phone= document.getElementById("phoneno").value;
    let email=  document.getElementById("email").value;
    let date= document.getElementById("date").value;
    let gender= document.getElementById("Gender").value;
    let level= document.getElementById("Level").value;
    let status= document.getElementById("status").value;
    let dept= document.getElementById("Departement").value;
    let student = new Student(name, id, date,status, gpa, gender, level, dept, email, phone);
    if(validation()){
        Students.push(student);
    }
    localStorage.setItem("Students", JSON.stringify(Students));
}