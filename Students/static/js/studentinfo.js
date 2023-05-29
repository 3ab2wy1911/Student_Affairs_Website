function validation(event) {
    setEventDefaults(event);
    //name validation:
    var name = document.getElementById("name").value;
    var regex = /^([a-zA-Z]+)\s([a-zA-Z]+)$/
    if (!regex.test(name)) {
        alert("Please enter a valid name");
        return false;
    }

    //id validation:
    var id = document.getElementById("ID").value;
    var idreg = /^\d{8}$/;
    if (!idreg.test(id)) {
        alert("Please enter a valid id which's only about 8 numbers");
        return false;
    }

    //gpa validation:
    var gpa = document.getElementById("GPA").value;
    var gpareg = /^[0-5].\d{2}?$/;
    if (!gpareg.test(gpa)) {
        alert("Please enter a valid gpa which's range from 0 to 5 and up to 2 decimal digits is valid");
        return false;
    }

    //phone validation:
    var phone = document.getElementById("phoneno").value;
    var phonereg = /^01[1250]\d{8}$/
    if (!phonereg.test(phone)) {
        alert("Please enter a valid phone number which starts with 01 followed by 9 numbers");
        return false;
    }

    //email validation:
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+\.[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
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
    var dept = document.getElementById("Departement").value;
    var level = document.getElementById("Level").value;
    if (level < 3) {
        if (dept !== "general") {
            alert("Please enter a valid department, where if the level is less than 3 the department MUST be general");
            return false;
        }
    }
    else if (level > 3) {
        if (dept === "general") {
            alert("Please enter a valid department, where if the level is greater than 3 the department MUST NOT be general");
            return false;
        }
    }
    document.getElementById("update").disabled = true;
    document.getElementById("update-form").submit();


    return false;


}


