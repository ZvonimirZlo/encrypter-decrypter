import { encrypter } from "./functions.js";

//Variables
const form = document.getElementById('form')
const descriptionButton = document.getElementById('descBtn');
const description = document.getElementById("description");
const encryptTextBox = document.getElementById('textEnc')
const encryptOut = document.getElementById('textEncOut');
const decryptTextBox = document.getElementById('textDec');
const decryptOut = document.getElementById('textDecOut');
const encryptButton = document.getElementById('encBtn');
const slider = document.getElementById('switch');
const decryptButton = document.getElementById('decryptBtn');
const encryptSelect = document.getElementById('encrypter-select');
const decryptSelect = document.getElementById('decrypter-select');

//Date object and instances needed to create correct time format
const time = new Date();
const year = time.getFullYear();
const month = time.getMonth() + 1;
const date = time.getDate();
const hours = time.getHours();
const minutes = time.getMinutes();
const secs = time.getSeconds();

//Time format 
const timeFormat = `${date}.${month}.${year} ${hours}:${minutes}:${secs}`;

// Shows/hides text box with instructions
const showHideTextBox = () => {
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

descriptionButton.onclick = showHideTextBox;

// Hides description text box on page reload
window.onload = () => {
   description.style.display = "none";
}

encryptButton.addEventListener('click', () => {console.log(encrypter(encryptTextBox.value))})
encryptButton.onclick = encrypter

form.addEventListener('submit', (e) => {
    e.preventDefault();
})
