class admin{
  constructor(name, phone, email, password, repeatedpassword) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }

}
const form = document.querySelector('form');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); 
  
//   const email = emailInput.value;
//   const password = passwordInput.value;
  
//   let storedPassword = JSON.parse(localStorage.getItem(email)).password;
//   if (storedPassword === password) {
//     alert('Login successful!');
//     window.location.href = 'afterlogin.html';
//   } else {
//     alert('Incorrect Email or password.');
//   }
// });
