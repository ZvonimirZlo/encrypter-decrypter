//Variables
const descriptionButton = document.getElementById('descBtn');
const description = document.getElementById("description");
const encryptTextBox = document.getElementById('textEnc');
const encryptOut = document.getElementById('textEncOut');
const decryptTextBox = document.getElementById('textDec');
const decryptOut = document.getElementById('textDecOut');
const encryptButton = document.getElementById('encBtn');
const slider = document.getElementById('switch');
const decryptButton = document.getElementById('decryptBtn');

//Shows/hides text box with instructions
const showHideTextBox = () => {
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

descriptionButton.onclick = showHideTextBox;

//Hides description text box on page reload
window.onload = () => {
   description.style.display = "none";
}

