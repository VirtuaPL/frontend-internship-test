/* Here goes your JS code */

window.onload = function () {
    let clickMeBtn = document.getElementById('clickMeBtn');
    clickMeBtn.addEventListener('click', function (event) {
        location.href = "#show-popup-form";
    });

};

let loginForm = document.querySelector('#sign-in');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
}, false);


function validateForm() {
    let email = document.forms["loginForm"]["email"];
    let password = document.forms["loginForm"]["password"]
    let checkbox = document.forms["loginForm"]["checkbox"];
    let label = document.getElementsByTagName("label");

    if (email.value == "") {
        console.log("empty login form");
        email.classList.add("incorrect");
        email.focus();
        return false;
    } else {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailRegex.test(email.value) == false) {
            console.log("invalid email");
            email.classList.add("incorrect");
            email.focus();
            return false;
        } else {
            console.log("email OK");
            email.classList.remove("incorrect");
        }
    }


    if (password.value == "") {
        console.log("empty password form");
        password.classList.add("incorrect");
        password.focus();
        return false;
    } else {
        console.log("password OK");
        password.classList.remove("incorrect");
    }


    if (checkbox.checked == false) {
        console.log("checkbox not checked");
        label[0].classList.add("incorrectLabel");
        return false;
    } else {
        console.log("checkbox OK");
        label[0].classList.remove("incorrectLabel");
    }


}