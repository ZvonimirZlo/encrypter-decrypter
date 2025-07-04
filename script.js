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


//Shows inputOne if Vigenere cipher or Alternating split 
document.body.addEventListener('mousemove', () => {
    encryptSelect.value === 'Vigenere' || encryptSelect.value === 'Alternating split' ? inputOne.style.display = 'block' : inputOne.style.display = 'none';
});

//Shows inputTwo if Vigenere cipher or Alternating split 
document.body.addEventListener('mousemove', () => {
    decryptSelect.value === 'Vigenere' || decryptSelect.value === 'Alternating split' ? inputTwo.style.display = 'block' : inputTwo.style.display = 'none';
})


// Shows/hides description
const showHideTextBox = () => {
    description.style.display === "none" ? description.style.display = "block" : description.style.display = "none";
}

//Shows description 
descriptionButton.onclick = showHideTextBox;

const hideTextBox = () => {
    description.style.display = "none";
};

// Hides description text box on page load
window.onload = () => {
    description.style.display = "none";
}

// Shows/hides encryption method depending on switcher position
const showHideMethodEnc = () => {
    const slider = document.getElementById('switch');
    return slider.checked === true ? `Method: ${encryptSelect.value} ${inputOne.value}` : `Method hidden!`;
}


//**ENCRYPTION HANDLER**
const handleEncryption = () => {
    if (encryptSelect.value === 'RAV-ESO') encryptOut.innerHTML = `${ravEso(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}] `;
    else if (encryptSelect.value === 'RAV-N') encryptOut.innerHTML = `${rav_n(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (encryptSelect.value === 'RAV-S') encryptOut.innerHTML = `${rav_s(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (encryptSelect.value === 'Alternating split') encryptOut.innerHTML = `${encryptAltSplit(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (encryptSelect.value === 'Substitution') encryptOut.innerHTML = `${encryptSubstitution(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (encryptSelect.value === 'Multi six') encryptOut.innerHTML = `${encodeMultSix(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (encryptSelect.value === 'Vigenere') encryptOut.innerHTML = `${encryptVin(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (encryptSelect.value === 'ROT 13') encryptOut.innerHTML = `${rot13encrypter(encryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
}
encryptButton.onclick = handleEncryption;

//Changes input one and/or input two value to string if Vigenere cipher is selected because Alternating split works only with numbers as a key
// and Vigenere cipher works only with strings as a keys
const changeInputValue = () => {
    if (encryptSelect.value === 'Vigenere') {
        inputOne.setAttribute('type', 'text');
    } else {
        inputOne.setAttribute('type', 'number');
    }
    if (decryptSelect.value === 'Vigenere') {
        inputTwo.setAttribute('type', 'text');
    } else {
        inputTwo.setAttribute('type', 'number');
    }
};

encryptSelect.onclick = changeInputValue;




// **DECRYPTION HANDLER**
const handleDecryption = () => {
    if (decryptSelect.value === 'RAV-ESO') decryptOut.innerHTML = `${ravEsoDec(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (decryptSelect.value === 'RAV-N') decryptOut.innerHTML = `${ravDec_n(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (decryptSelect.value === 'RAV-S') decryptOut.innerHTML = `${rav_sDec(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (decryptSelect.value === 'Alternating split') decryptOut.innerHTML = `${decryptAltSplit(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (decryptSelect.value === 'Substitution') decryptOut.innerHTML = `${decryptSubstitution(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (decryptSelect.value === 'Multi six') decryptOut.innerHTML = `${decodeMultSix(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (decryptSelect.value === 'Vigenere') decryptOut.innerHTML = `${decryptVin(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
    else if (decryptSelect.value === 'ROT 13') decryptOut.innerHTML = `${rot13decrypter(decryptTextBox.value)} [Created: ${timeFormat}, ${showHideMethodEnc()}]`;
}
decryptButton.onclick = handleDecryption;

decryptSelect.onclick = changeInputValue;


//ROT 13 handleEncryption handler
function rot13encrypter(str) {
    const rot = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM0123456789';
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const handleEncryption = (x) => rot[alpha.indexOf(x)];
    return str.replace(/[a-zA-Z0-9]/g, handleEncryption);
};

//ROT 13 handleDecryption handler
function rot13decrypter(str) {
    const rot = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM0123456789';
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const handleDecryption = (x) => alpha[rot.indexOf(x)];
    return str.replace(/[a-zA-Z0-9]/g, handleDecryption);
};


//Alternating split handleEncryption handler
function encryptAltSplit(text, n) {
    n = inputOne.value;
    if (n <= 0 || n > 100) {
        alert('Key have to be a number between 1 and 100! Please enter a valid key.');
        return;
    };
    for (let i = 0; i < n; i++) {
        text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1')
    }
    return text;
};

//Alternating split handleDecryption handler
function decryptAltSplit(text, n) {
    n = inputTwo.value;
    if (n <= 0 || n > 100) {
        alert('Key have to be a number between 1 and 100! Please enter a valid key.');
        return;
    };
    let l = text && text.length / 2 | 0
    for (let i = 0; i < n; i++) {
        text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
    }
    return text;
}

//Substitution handleEncryption handler
function encryptSubstitution(str) {
    return str.replace(/./g, x => x.charCodeAt(0) + 58);
}

//Substitution handleDecryption handler
function decryptSubstitution(str) {
    return str.replace(/1?\d{2}/g, i => String.fromCharCode(+i - 58));
}

//Multi six handleEncryption handler
function encodeMultSix(str) {
    return str.split('').map(x => x.charCodeAt(str) * 6).map(x => String.fromCharCode(x)).join('');
}

//Multi six handleDecryption handler
function decodeMultSix(str) {
    return str.split('').map(x => x.charCodeAt(str) / 6).map(x => String.fromCharCode(x)).join('');
}

//*HELPER FUNCTIONS

//Checks if letter is uppercase 
const isUpperCase = (letter) => {
    var l = letter.charCodeAt();
    if (l >= 65 && l <= 90) {
        return true;
    } else {
        return false;
    }
};

//Checks if letter is lowercase
const isLowerCase = (letter) => {
    var l = letter.charCodeAt();
    if (l >= 97 && l <= 122) {
        return true;
    } else {
        return false;
    }
};

//Checks if input value is letter
function isLetter(letter) {
    if (isLowerCase(letter) || isUpperCase(letter)) {
        return true;
    } else {
        return false;
    }
}

//Modulo
function mod(n, m) {
    return ((n % m) + m) % m;
}


//Vigenere cipher encryption handler
function encryptVin(text, key) {
    key = inputOne.value.split('').filter(x => x.match(/[a-z]/gi)).join('');

    if (!key.match(/[a-zA-Z]/g)) alert('Key have to be a alphabet word longer than one character! Please enter a valid key.');
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

//Vigenere cipher decryption handler
function decryptVin(enc, key) {

    key = inputTwo.value.split('').filter(x => x.match(/[a-z]/gi)).join('').replace(/\s+/g, '');
    
    if (!key.match(/[a-zA-Z]/g)) alert('Key have to be a alphabet word longer than one character! Please enter a valid key.');
    
    let decrypted = "";
    let j = 0;
    
    for (let i = 0; i < enc.length; i++) {
        let currentLetter = enc[i];
        const A = 65;
        const a = 97;

        if (isUpperCase(currentLetter)) {
            let Ci = (currentLetter.charCodeAt(0) - A);
            let Ki = (key[j % key.length].toUpperCase()).charCodeAt() - A;
            let upperLetter = mod(Ci - Ki, 26);

            decrypted += String.fromCharCode(upperLetter + A);

            j++;
        } else if (isLowerCase(currentLetter)) {
            let Ci = (currentLetter.charCodeAt(0) - a);
            let Ki = (key[j % key.length].toLowerCase()).charCodeAt() - a;
            let lowerLetter = mod(Ci - Ki, 26);

            decrypted += String.fromCharCode(lowerLetter + a);

            j++;
        } else {
            decrypted += currentLetter;
        }
    }
    return decrypted;
}

//*HELPER FUNCTIONS FOR RAV*

//Number to roman handler
const toRomeHandler = (integer) => {
    let output = '';
    do {
        if (integer >= 1000) {
            output += 'M';
            integer -= 1000;
        } else if (integer >= 900 && integer <= 999) {
            output += 'CM';
            integer -= 900;
        } else if (integer >= 500 && integer <= 899) {
            output += 'D';
            integer -= 500;
        } else if (integer >= 400 && integer <= 499) {
            output += 'CD';
            integer -= 400;
        } else if (integer >= 100 && integer <= 399) {
            output += 'C';
            integer -= 100;
        } else if (integer >= 90 && integer <= 99) {
            output += 'XC';
            integer -= 90;
        } else if (integer >= 50 && integer <= 89) {
            output += 'L';
            integer -= 50;
        } else if (integer >= 40 && integer <= 49) {
            output += 'XL';
            integer -= 40;
        } else if (integer >= 10 && integer <= 39) {
            output += 'X';
            integer -= 10;
        } else if (integer > 8 && integer < 10) {
            output += 'IX';
            integer -= 9;
        } else if (integer >= 5 && integer <= 8) {
            output += 'V';
            integer -= 5;
        } else if (integer > 3 && integer < 5) {
            output += 'IV';
            integer -= 4;
        } else if (integer <= 3 && integer > 0) {
            output += 'I';
            integer -= 1;
        } else {
            output += 'Invalid input!';
        }
    } while (integer > 0);
    return output.toLowerCase();
};

//Roman to number handler
const fromRomeHandler = (romanNum) => {
    const map = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };

    return romanNum.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, el) => acc + map[el], 0);
};

//RAV-ESO encryption handler
function ravEso(str) {
    const alpha = 'ivxlcdm';
    const repl = '][}{)(&';
    const replacer = (x) => repl[alpha.indexOf(x)];
    return str.split('')
        .map(x => x.charCodeAt())
        .map(x => toRomeHandler(x))
        .reverse()
        .join('.')
        .replace(/[ivxlcdm]/g, replacer)
};

//RAV-ESO decryption handler
function ravEsoDec(str) {
    const repl = 'ivxlcdm';
    const alpha = '][}{)(&';
    const replacer = (x) => repl[alpha.indexOf(x)];
    return str
        .replace(/[\]\[\}\{\(\)\&}]/g, replacer).toUpperCase()
        .split('.')
        .reverse()
        .map(x => fromRomeHandler(x))
        .map(x => String.fromCharCode(x))
        .join('')
};


//RAV-N encryption handler
function rav_n(str) {
    const alpha = 'ivxlcdm';
    const repl = '1234567';
    const replacer = (x) => repl[alpha.indexOf(x)];
    return str.split('')
        .map(x => x.charCodeAt())
        .map(x => toRomeHandler(x))
        .reverse()
        .join('8')
        .replace(/[ivxlcdm]/g, replacer)
};

//RAV-N decryption handler
function ravDec_n(str) {
    const repl = 'ivxlcdm';
    const alpha = '1234567';
    const replacer = (x) => repl[alpha.indexOf(x)];
    return str
        .replace(/[1-7]/g, replacer).toUpperCase()
        .split('8')
        .reverse()
        .map(x => fromRomeHandler(x))
        .map(x => String.fromCharCode(x))
        .join('')
};

//RAV-S encryption handler
function rav_s(str) {
    const alpha = 'ivxlcdm';
    const repl = '!#$%&?@';
    const replacer = (x) => repl[alpha.indexOf(x)];
    return str.split('')
        .map(x => x.charCodeAt())
        .map(x => toRomeHandler(x))
        .reverse()
        .join('+')
        .replace(/[ivxlcdm]/g, replacer)
};

//RAV-S decryption handler
function rav_sDec(str) {
    const repl = 'ivxlcdm';
    const alpha = '!#$%&?@';
    const replacer = (x) => repl[alpha.indexOf(x)];
    return str
        .replace(/[\x!\x#\x$\x%\x&\x?\x@]/g, replacer)
        .toUpperCase()
        .split('+')
        .reverse()
        .map(x => fromRomeHandler(x))
        .map(x => String.fromCharCode(x))
        .join('')
};






















