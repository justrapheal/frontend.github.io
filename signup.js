let _password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');
let _email = document.getElementById('email');
let _username = document.getElementById('userName');
let _lastname = document.getElementById('lastName');
let _firstname = document.getElementById('firstName');
let confirm = () => {
  if (_password.value != confirm_password.value) {
    console.log('passwords dont match');
    console.log(_password.length);
  } else if (_password.value.length < 6) {
    _password.setCustomValidity('too shrt');
  } else if (_password.value.search(/[a-z]/i) < 0) {
    _password.setCustomValidity(
      'Your password must contain at least one letter.'
    );
  } else if (_password.value.search(/[0-9]/) < 0) {
    _password.setCustomValidity('your Password must contain atleast one digit');
  } else if (_password.value.search(/[A-Z]/i) < 0) {
    _password.setCustomValidity(
      'Your Password Must Contain Atleast One Capital Letter'
    );
  } else {
    _password.setCustomValidity('');
  }
};
var checkedbox = document.getElementById('chk');
let pas = document.getElementById('password');
let toggle = () => {
  checkedbox.checked
    ? pas.setAttribute('type', 'text')
    : pas.setAttribute('type', 'password');
};

const json = {
  password: _password,
  email: _email,
  lastName: _lastname,
  firstName: _firstname,
  userName: _username
};
const send = () => {
  fetch(cecula / api / json).responstbbe;
};
