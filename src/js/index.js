/* Here goes your JS code */

window.onload = function () {
    var clickMeBtn = document.getElementById('clickMeBtn');
    clickMeBtn.addEventListener('click', function (event) {
        location.href = "#show-popup-form";
    });
};