/* Here goes your JS code */

window.onload = function () {
    let clickMeBtn = document.getElementById('clickMeBtn');
    clickMeBtn.addEventListener('click', function (event) {
        location.href = "#show-popup-form";
    });

};

function clickMe() {
    location.href = "#show-popup-form";
}


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

    // email validation
    if (email.value == "") {
        email.classList.add("incorrect");
        email.focus();
        return false;
    } else {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailRegex.test(email.value) == false) {
            email.classList.add("incorrect");
            email.focus();
            return false;
        } else {
            email.classList.remove("incorrect");

            // password validation
            if (password.value == "") {
                password.classList.add("incorrect");
                password.focus();
                return false;
            } else {
                password.classList.remove("incorrect");

                // checkbox validation
                if (checkbox.checked == false) {
                    label[0].classList.add("incorrectLabel");
                    return false;
                } else {
                    label[0].classList.remove("incorrectLabel");

                    // success message
                    let clickMeBtn = document.getElementById('clickMeBtn');
                    let successMessage = document.getElementsByTagName('h1');
                    let submit = document.getElementById('sign-in-submit');

                    clickMeBtn.style.display = "none";
                    successMessage[0].classList.remove("hidden");
                    submit.disabled = true;
                    setTimeout(function () {
                        location.href = "#";
                    }, 3000);
                }
            }
        }
    }
}