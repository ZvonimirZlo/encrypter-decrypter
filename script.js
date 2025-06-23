//Variables
const descriptionButton = document.getElementById('descBtn');
const description = document.getElementById("description");
const encryptTextBox = document.getElementById('textEnc')
const encryptOut = document.getElementById('textEncOut');
const decryptTextBox = document.getElementById('textDec');
const decryptOut = document.getElementById('textDecOut');
const encryptButton = document.getElementById('encBtn');
const decryptButton = document.getElementById('decBtn');
const encryptSelect = document.getElementById('encrypter-select');
const decryptSelect = document.getElementById('decrypter-select');
const inputOne = document.getElementById('number1');
const inputTwo = document.getElementById('number2');

//Date object and instances needed to create correct time format
const time = new Date();
const year = time.getFullYear();
const month = time.getMonth() + 1;
const day = time.getDay();
const date = time.getDate();
const hours = time.getHours();
const minutes = time.getMinutes();
const secs = time.getSeconds();

const dayNames = ["Sunday", "Monday", "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Time format 
const timeFormat = `${dayNames[day]} ${date}.${month}.${year} ${hours}:${minutes}:${secs}`;


//Shows inputOne 
document.body.addEventListener('mousemove', () => {
    encryptSelect.value === 'vigenere' || encryptSelect.value === 'alternating split' ? inputOne.style.display = 'block' : inputOne.style.display = 'none';
});

//Shows inputTwo 
document.body.addEventListener('mousemove', () => {
    decryptSelect.value === 'vigenere' || decryptSelect.value === 'alternating split' ? inputTwo.style.display = 'block' : inputTwo.style.display = 'none';
})


// Shows/hides description
const showHideTextBox = () => {
    description.style.display === "none" ? description.style.display = "block" : description.style.display = "none";
}

//Shows description 
descriptionButton.onclick = showHideTextBox;

// Hides description text box on page reload
window.onload = () => {
    description.style.display = "none";
}

// Showing/hiding encryption method depending on switcher position
const showHideMethodEnc = () => {
    const slider = document.getElementById('switch');
    return slider.checked === true ? `Method: ${encryptSelect.value} ${inputOne.value}` : `Method hidden!`;
}


//**ENCRYPTION HANDLER**
const encrypt = () => {
    if (encryptSelect.value === 'alternating split') encryptOut.innerHTML = `${encryptAltSplit(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (encryptSelect.value === 'substitution') encryptOut.innerHTML = `${encryptSubstitution(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (encryptSelect.value === 'multi six') encryptOut.innerHTML = `${encodeMultSix(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (encryptSelect.value === 'vigenere') encryptOut.innerHTML = `${encryptVin(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (encryptSelect.value === 'rot 13') encryptOut.innerHTML = `${rot13encrypter(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
}
encryptButton.onclick = encrypt;



// **DECRYPTION HANDLER**
const decrypt = () => {
    if (decryptSelect.value === 'alternating split') decryptOut.innerHTML = `${decryptAltSplit(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (decryptSelect.value === 'substitution') decryptOut.innerHTML = `${decryptSubstitution(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (decryptSelect.value === 'multi six') decryptOut.innerHTML = `${decodeMultSix(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (decryptSelect.value === 'vigenere') decryptOut.innerHTML = `${decryptVin(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (decryptSelect.value === 'rot 13') decryptOut.innerHTML = `${rot13decrypter(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
}
decryptButton.onclick = decrypt;

//ROT 13 encrypt handler
function rot13encrypter(str) {
    const rot = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM0123456789';
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const decrypt = (x) => rot[alpha.indexOf(x)];
    return str.replace(/[a-zA-Z0-9]/g, decrypt);
};

//ROT 13 decrypt handler
function rot13decrypter(str) {
    const rot = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM0123456789';
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const decrypt = (x) => alpha[rot.indexOf(x)];
    return str.replace(/[a-zA-Z0-9]/g, decrypt);
};


//Alternating split encrypt handler
function encryptAltSplit(text, n) {
    n = inputOne.value;
    for (let i = 0; i < n; i++) {
        text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1')
    }
    return text;
};

//Alternating split decrypt handler
function decryptAltSplit(text, n) {
    if (!text || n <= 0) alert('Something');
    n = inputTwo.value;
    let l = text && text.length / 2 | 0
    for (let i = 0; i < n; i++) {
        text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
    }
    return text;
}

//Substitution encrypt handler
function encryptSubstitution(str) {
    return str.replace(/./g, x => x.charCodeAt(0) + 58);
}

//Substitution decrypt handler
function decryptSubstitution(str) {
    return str.replace(/1?\d{2}/g, i => String.fromCharCode(+i - 58));
}

//Multi six encrypt handler
function encodeMultSix(str) {
    return str.split('').map(x => x.charCodeAt(str) * 6).map(x => String.fromCharCode(x)).join('');
}

//Multi six decrypt handler
function decodeMultSix(str) {
    return str.split('').map(x => x.charCodeAt(str) / 6).map(x => String.fromCharCode(x)).join('');
}

//Helper functions
const isUpperCase = (letter) => {
    var l = letter.charCodeAt();
    if (l >= 65 && l <= 90) {
        return true;
    } else {
        return false;
    }
};

const isLowerCase = (letter) => {
    var l = letter.charCodeAt();
    if (l >= 97 && l <= 122) {
        return true;
    } else {
        return false;
    }
};

//Vigenere cipher encrypt handler
function encryptVin(text, key) {
    key = inputOne.value;
    let cypher = "";
    for (let i = 0, j = 0; i < text.length; i++) {
        let currentLetter = text[i];

        if (isUpperCase(currentLetter)) {
            const upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
            cypher += String.fromCharCode(upperLetter + 65);
            j++;
        } else if (isLowerCase(currentLetter)) {
            const lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j % key.length].toLowerCase().charCodeAt() - 97)) % 26;
            cypher += String.fromCharCode(lowerLetter + 97);
            j++;
        } else {
            cypher += currentLetter;
        }
    }
    return cypher;
};

//Vigenere cipher decrypt handler
function decryptVin(text, keyW) {
    keyW = inputTwo.value;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const input = text.toUpperCase();
    const key = keyW.toUpperCase();

    let output = "";
    let keyIndex = 0;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (alphabet.includes(char)) {
            const charIndex = alphabet.indexOf(char);
            const keyCharIndex = alphabet.indexOf(key[keyIndex % key.length]);
            const encryptedCharIndex = (charIndex - keyCharIndex + alphabet.length) % alphabet.length;

            output += alphabet[encryptedCharIndex];
            keyIndex++;
        } else {
            output += char;
        }
    }
    return output;
}









