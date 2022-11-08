let btn = document.querySelector("button");
let btnEyeShut = document.querySelector("#btnEyeShut");
let inputPw = document.querySelector("input");
let pwState = document.querySelector("#pwState")

function toggleVisibility(event) {
    btnEyeShut.classList.toggle("hidden");
    if (inputPw.type === "password"){
        inputPw.setAttribute("type", "text");
        pwState.textContent = "click to hide password";
    }
    else {
        inputPw.setAttribute("type", "password");

        //EDIT
        pwState.textContent = "click to show password";
    }
}

btn.addEventListener('click', toggleVisibility);