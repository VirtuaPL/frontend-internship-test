             /* Here goes your JS code */
const popupHide = document.querySelector(".popup");
popupHide.style.display = "none";

const btnMain = document.getElementById("show-popup-form"); 
const checkbox = document.querySelector(".checkbox");  
const submit = document.querySelector(".submit--button");  
const eMail = document.querySelector(".email");
const password = document.querySelector(".password");
const successMessage = document.querySelector(".success--message");
successMessage.style.display = "none";

btnMain.addEventListener("click", () => { 
    popupHide.style.display = "block";
})

checkbox.addEventListener('click', () => {
    submit.classList.toggle('checkbox--checked');
})

submit.addEventListener('click', () => { 
    setTimeout( () => {
        popupHide.style.display = "none";
        successMessage.style.display = "block";
        btnMain.style.display = "none";
        }, 3000);

})
