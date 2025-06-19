export function encrypter(string){
  const al = 'abcdefghijklmnopqrstuvwxyz';
  const shift = 'nopqrstuvwxyzabcdefghijklm';
  const rev = al.split('').reverse().join('');
  return string.replace(/[a-z]/gi, x => shift[al.indexOf(x)]).replace(/[a-z]/g, x => rev[al.indexOf(x)]);
}


export function rot13(str) {
const rot = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM0123456789';
 const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const decrypt = (x) => rot[alpha.indexOf(x)];
  return str.replace(/[a-zA-Z0-9]/g, decrypt);
};

export function reversedCipher (plaintext){
  return plaintext.split('').reverse().join('').split(' ').reverse().map(x => x.slice(1) + x.slice(0, 1)).join(' ');
};

export function encryptAlternatingSplit(text, n) {
  if(!text || n <= 0) return text;
let odd = text.split('').filter((x, idx) => idx % 2 !== 0);
  let ev = text.split('').filter((x, idx) => idx % 2 === 0);

 return encrypt([...odd,...ev].join(''), n = n - 1);
};

export function decryptAlternatingSplit(encryptedText, n) {
   if(!encryptedText || n <= 0) return encryptedText;
  let out = Array(encryptedText.length);
  while(n--){
  let c = 0;
    for(let i = 1; i < encryptedText.length; i += 2){
      out[i] = encryptedText[c++]
    };
    
    for(let j = 0; j < encryptedText.length; j += 2){
      out[j] = encryptedText[c++]
    };
      encryptedText = out.join('');
  }
  return encryptedText;
}

export function oneDown(str) {
 const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
 const jibberish = 'zABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy';
 return typeof str !== 'string' ? "Input is not a string" : str.replace(/[a-zA-Z]/g, x => jibberish[alpha.indexOf(x)]);
}

export function encryptSubstitution (str) {
    return str.replace(/./g, x => x.charCodeAt(0)+58);
}

export function decryptSubstitution (str) {
    const word1 = str.match(/.{1,3}/g);
     return word1.map(x => String.fromCharCode(x-58)).join('');
}