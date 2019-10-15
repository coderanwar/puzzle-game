
// Personalized welcome message code

var myButton = document.getElementById('changeUser');
var myHeading = document.getElementById('message');

function setUserName() {
    var myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Thank you , ' + myName + ".";
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome back , ' + storedName + ".";
}

var storedNameCheck = localStorage.getItem('name');
if(storedNameCheck === null || storedNameCheck == null || storedNameCheck === 'null' || storedNameCheck == 'null') {
    setUserName();
}

myButton.onclick = function() {
    setUserName();
}

