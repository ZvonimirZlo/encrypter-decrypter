//Variables
const descriptionButton = document.getElementById('descBtn');
const description = document.getElementById("description");
const encryptTextBox = document.getElementById('textEnc')
const encryptOut = document.getElementById('textEncOut');
const decryptTextBox = document.getElementById('textDec');
const decryptOut = document.getElementById('textDecOut');
const encryptButton = document.getElementById('encBtn');
const slider = document.getElementById('switch');
const decryptButton = document.getElementById('decBtn');
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


//**ENCRYPTION HANDLER**
const encrypt = () => {
    console.log(decryptSelect.value)
    if (encryptSelect.value === 'alternating split') encryptOut.innerHTML = `${encryptAltSplit(encryptTextBox.value)} [Created: ${timeFormat}]`;
    else if(encryptSelect.value === 'substitution') encryptOut.innerHTML = `${encryptSubstitution(encryptTextBox.value)} [Created: ${timeFormat}]`;
console.log(encryptSelect.value);

}
encryptButton.onclick = encrypt;



// **DECRYPTION HANDLER**
const decrypt = () => {
    if (decryptSelect.value === 'alternating split') decryptOut.innerHTML = `${decryptAltSplit(decryptTextBox.value)} [Created: ${timeFormat}]`;
    else if(decryptSelect.value === 'substitution') decryptOut.innerHTML = `${decryptSubstitution(decryptTextBox.value)} [Created: ${timeFormat}]`;

}
decryptButton.onclick = decrypt;

// function encrypter(string) {
//     const al = 'abcdefghijklmnopqrstuvwxyz';
//     const shift = 'nopqrstuvwxyzabcdefghijklm';
//     const rev = al.split('').reverse().join('');
//     return string.replace(/[a-z]/gi, x => shift[al.indexOf(x)]).replace(/[a-z]/g, x => rev[al.indexOf(x)]);
// }


function rot13(str) {
    const rot = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM0123456789';
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const decrypt = (x) => rot[alpha.indexOf(x)];
    return str.replace(/[a-zA-Z0-9]/g, decrypt);
};

function reversedCipher(plaintext) {
    return plaintext.split('').reverse().join('').split(' ').reverse().map(x => x.slice(1) + x.slice(0, 1)).join(' ');
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
    n = inputTwo.value;
    let l = text && text.length / 2 | 0
    for (let i = 0; i < n; i++) {
        text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
    }
    return text;
}

function oneDown(str) {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const jibberish = 'zABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy';
    return str.replace(/[a-zA-Z]/g, x => jibberish[alpha.indexOf(x)]);
}

function oneDownDec(str) {
    const jibberish = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const alpha = 'zABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy';
    return str.replace(/[a-zA-Z]/g, x => alpha[jibberish.indexOf(x)]);
}

function encryptSubstitution(str) {
    return str.replace(/./g, x => x.charCodeAt(0) + 58);
}

function decryptSubstitution(str) {
    return str.replace(/1?\d{2}/g, i => String.fromCharCode(+i - 58));
}

function encodeMultSix(str) {
    return str.split('').map(x => x.charCodeAt(str) * 6).map(x => String.fromCharCode(x)).join('');
}

function decodeMultSix(str) {
    return str.split('').map(x => x.charCodeAt(str) / 6).map(x => String.fromCharCode(x)).join('');
}





