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

// function encrypter(string){
//   const al = 'abcdefghijklmnopqrstuvwxyz';
//   const shift = 'nopqrstuvwxyzabcdefghijklm';
//   const rev = al.split('').reverse().join('');
//   return string.replace(/[a-z]/gi, x => shift[al.indexOf(x)]).replace(/[a-z]/g, x => rev[al.indexOf(x)]);
// }

encryptButton.addEventListener('click', () => {console.log(encrypter(encryptTextBox.value))})
console.log(encrypter(encryptTextBox.value));
encryptButton.onclick = encrypter

form.addEventListener('submit', (e) => {
    e.preventDefault();
})
