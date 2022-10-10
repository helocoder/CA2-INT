
function validateForm() {

    var Fname = document.getElementById("fname").value;
    var Lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;

    // Regular Expression For Email
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    // Conditions
    if (Fname != '' && Lname!=''&& email != '' && pass != '' && cpass!='' ) {
    if (email.match(emailReg)) {

    if(pass==cpass)
    {
        alert("validation checked, good to go");
    }
    else{
        alert("Password and confirm password not matched");
    }
    } 
    
    else {
    alert("Invalid Email Address...!!!");
    return false;
    }
    } else {
    alert("All fields are required.....!");
    return false;
    }
}