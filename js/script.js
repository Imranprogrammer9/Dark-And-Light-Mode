//Light And Dark Mode Toggle
let button = document.querySelector('.toggle');

function whitetodark() {
    let button = document.body;
    button.classList.toggle("dark-mode");
    let modifyText = document.getElementById('toggle');
    if (modifyText.innerHTML === "DARK") {
        modifyText.innerHTML = "LIGHT";
    }
    else {
        modifyText.innerHTML = "DARK";
    }
}