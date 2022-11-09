const btn = document.querySelector("button");
const btnEyeShut = document.querySelector("#btnEyeShut");
const inputPw = document.querySelector("input");
const pwState = document.querySelector("#pwState")

function toggleVisibility(event) {
    btnEyeShut.classList.toggle("hidden");
    if (inputPw.type === "password"){
        inputPw.setAttribute("type", "text");
        pwState.textContent = "click to hide password";
    }
    else {
        inputPw.setAttribute("type", "password");
        pwState.textContent = "click to show password";
    }
}

btn.addEventListener('click', toggleVisibility);