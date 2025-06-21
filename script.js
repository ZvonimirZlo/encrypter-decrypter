import { encrypter, rot13 } from "./functions.js";

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
const inputOne = document.getElementById('number1');
const inputTwo = document.getElementById('number2');

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
    description.style.display === "none" ? description.style.display = "block" : description.style.display = "none";
}

//Shows inputOne only for Vigenere cipher
document.body.addEventListener('mousemove', () => {
    encryptSelect.value === 'vigenere' ? inputOne.style.display = 'block' : inputOne.style.display = 'none';
})

//Shows inputTwo only for Vigenere cipher
document.body.addEventListener('mousemove', () => {
    decryptSelect.value === 'vigenere' ? inputTwo.style.display = 'block' : inputTwo.style.display = 'none';
})


//Shows description 
descriptionButton.onclick = showHideTextBox;

// Hides description text box on page reload
window.onload = () => {
    description.style.display = "none";
}



encryptButton.addEventListener('click', () => {
    if (encryptSelect.value === 'rot 13') encryptOut.innerHTML = `${rot13(encryptTextBox.value)} [Created: ${timeFormat}]`;
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    // showHideInputs()
})




