# Zyfr@ Encrypter-Decrypter

- ## Table of Content:

- [About The App](#about-the-app)
- [How It Works](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)

- ## About The App
  Encryption is the process that converts the original representation of the information,
  known as <strong>plaintext</strong>, into an alternative form known as
  <strong>ciphertext</strong>.
  <br>
  Decryption is the reverse process.
  <br>
  This app uses multiple encryption methods to encrypt and decrypt your text. The date and time of creation are shown at the bottom of the message.


- ## Screenshots
   <p>
   <img src='' width="400">
   </p>
  
- ## How It Works
   #### How to Use This App:
    <ul>
    <li><strong>Input Text:</strong> Type or paste your message into the text area.</li>
    <li><strong>Select Method:</strong> Choose your desired algorithm from the 'Method options' dropdown.</li>
    <li><strong>Privacy Toggle:</strong> Use the slider to show or hide the selected method for extra security (method is hidden by default).</li>
    <li><strong>Process:</strong> Click the 'ENCRYPT' button to secure your text.</li>
    <li><strong>Copy & Save:</strong> Click the 'Copy' button. A browser alert will confirm the text is saved to your clipboard.</li>
    <li><strong>Decrypt:</strong> To unlock a message, paste the ciphertext, ensure the correct method is selected, and click 'DECRYPT'.</li>
    <li><strong>Enjoy :)</strong></li>
    </ul>

   Some enryption methods require a key for encoding and the same key for decoding text. 
   For example the Vigenère cipher is a method of encrypting alphabetic text where each letter of the plaintext is encoded with a different Caesar cipher, 
   whose increment is determined by the corresponding letter of another text, the key. Below is the JavaScript implementation of Vigenere cypher encryption:
   
```
//HELPER FUNCTIONS 

//Checks if letter is uppercase 
const isUpperCase = (letter) => {
    const l = letter.charCodeAt();
    if (l >= 65 && l <= 90) {
        return true;
    } else {
        return false;
    }
};

//Checks if letter is lowercase
const isLowerCase = (letter) => {
    const l = letter.charCodeAt();
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

//*VIGENERE ENCRYPTION FUNCTION

   function encryptVigenere(text, key) {

    if (!key || !key.match(/[a-zA-Z]/g)) return;
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
}
```
Caesar cypher is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions along the alphabet (in this case 13).
Caesar cypher (Rot 13) JavaScript implementation:


```
// ROT 13 encryption handler
function rot13encrypter(str) {
    const rot = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM0123456789';
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const handleEncryption = (x) => rot[alpha.indexOf(x)];
    return str.replace(/[a-zA-Z0-9]/g, handleEncryption);
};
```

- ## Technologies
  `Css`, `Html`, `JavaScript` and `Animate.css`.

- ## Setup
  - open live demo app on the link above, or:
  - download or clone the repository
  - open it with Live Server
