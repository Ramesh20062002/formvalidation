function myfun() 
{



    let firstname = document.getElementById("fname").value
    error = /^[a-zA-Z]{2,30}$/.test(firstname)
    if (firstname == "") {
        document.getElementById("error").innerHTML = "Enter The value"
    }
    else if (!error) {
        document.getElementById("error").innerHTML = "enter the valid name"

    }
    else {
        document.getElementById("error").innerHTML = ""
    }

    let lastname = document.getElementById("lname").value

    if (lastname == "") {
        document.getElementById("error1").innerHTML = "Enter The value"

    }
    else {
        document.getElementById("error1").innerHTML = ""
    }

    let mail = document.getElementById("Email").value
    error3 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (mail == "") {
        document.getElementById("error3").innerHTML = "Enter The value"
    }
    else if (!error3.test(mail)) {
        document.getElementById("error3").innerHTML = "enter the valid Id"

    }
    else {
        document.getElementById("error3").innerHTML = ""
    }


    let phone = document.getElementById("pn").value
    error4 = /^\d{10}$/
    if (phone == "") {
        document.getElementById("error4").innerHTML = "Enter The Number"
    }
    else if (!error4.test(phone)) {
        document.getElementById("error4").innerHTML = "enter the valid Number"

    }
    else {
        document.getElementById("error4").innerHTML = ""
    }

    let password = document.getElementById("pwd").value
    error5 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)

    if (password == "") {
        document.getElementById("error5").innerHTML = "Enter The Password"
    }
    else if (!error5) {
        document.getElementById("error5").innerHTML = "enter the valid password"

    }
    else {
        document.getElementById("error5").innerHTML = ""
    }


    let password1 = document.getElementById("pwd1").value

    if ( password1 == password) {
        document.getElementById("error6").innerHTML = ""

    }
    //     else if (password1 !== password) {
    //         document.getElementById("error6").innerHTML = "incorrect password"
    //  }


    else {
        document.getElementById("error6").innerHTML = "Enter a valid Password"
    }


    if (!document.getElementById("radio1").checked && !document.getElementById("radio2").checked)
    
    {
        document.getElementById("error8").innerHTML = "specify the gender"
        
    }

    else
    { 

        document.getElementById("error8").innerHTML = "" 
    }

    
    let checkbox = document.getElementById("c-box").checked

    if (checkbox) {
        document.getElementById("error9").innerHTML = ""
    }
     else {
        document.getElementById("error9").innerHTML = "Please agree with the terms and condition"
    }


    //     alert("Please specify gender");
    //     return;
    // }



    // form.addEventListener('submit', e => {
    //     e.preventDefault();
    //     checkInputs();
    // });


}