function validation()
{
    //name validation:
    var name= document.getElementById("name").value;
    var regex=/^([a-zA-Z]+)\s([a-zA-Z]+)$/
    if (!regex.test(name))
    {
        alert("Please enter a valid name in this format:(firstname secondname)");
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
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email))
    {
      alert("Please enter a valid email address that follows this format: name@x.y");
      return false;
    }

    //password validation
    var pass= document.getElementById("pass").value;
    var passregex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passregex.test(pass))
    {
        alert("Please enter a valid password that follows the following conditions: it MUST consists of at least 6 characters,has at least one number,has at least one symbol,has at least one smallcase letter,has at least one upercase letter");
        return false;
    }

    //repeat password validation
    var pass = document.getElementById("pass").value;
    var repeatPassword = document.getElementById("repeat-pass").value;
    if (pass !== repeatPassword)
    {
        alert("Passwords do not match");
        return false;
    }

    return true;

}
class admin{
    constructor(name, phone, email, password, repeatedpassword) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

}
function myfun()
{
    var namee= document.getElementById("name").value;
    var phonee= document.getElementById("phoneno").value;
    var emaill = document.getElementById("email").value;
    var passw= document.getElementById("pass").value;
    var reoeatedpass=document.getElementById("repeat-pass").value;

    Admin = new admin(namee, phonee, emaill, passw, reoeatedpass);
    if(validation()){
        localStorage.setItem(emaill, JSON.stringify(Admin));
        location.href="afterlogin.html";
    }

}