class Register {
    constructor(Name, Email, Password, ConfirmPassword, PhoneNumber) {
        this.Name = Name;
        this.Email = Email;
        this.Password = Password;
        this.ConfirmPassword = ConfirmPassword;
        this.PhoneNumber = PhoneNumber;
    }
}

let register = [];
if (localStorage.getItem('Register')) {
    register = JSON.parse(localStorage.getItem('Register'));
}
window.register = register;

function validation() {
    //name validation:
    var name = document.getElementById("name").value;
    var regex = /^([a-zA-Z]+)\s([a-zA-Z]+)$/
    if (!regex.test(name)) {
        alert("Please enter a valid name in this format:(firstname secondname)");
        return false;
    }

    //phone validation:
    var phone = document.getElementById("phoneNumber").value;
    var phonereg = /^01[1250]\d{8}$/
    if (!phonereg.test(phone)) {
        alert("Please enter a valid phone number which starts with 01(0,1,2,5) followed by 9 numbers");
        return false;
    }

     //email validation:
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@gmail\.com$/;
    if (!regex.test(email)) {
        alert("Please enter a valid Gmail email address that follows this format: name@gmail.com");
        return false;
    }

    // Password validation
    var password = document.getElementById("password").value;
    var passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z]{4,})(?=.*\d{2,}).{6,}$/;
    if (!passwordRegex.test(password)) {
        alert("Please enter a valid password that follows the following conditions: it MUST contain at least 4 letters, at least 2 numbers, and at least 1 symbol");
        return false;
    }


    //repeat password validation
    var repeatPassword = document.getElementById("confirmPassword").value;
    if (password !== repeatPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;

}
