// export function encrypter(string){
//   const al = 'abcdefghijklmnopqrstuvwxyz';
//   const shift = 'nopqrstuvwxyzabcdefghijklm';
//   const rev = al.split('').reverse().join('');
//   return string.replace(/[a-z]/gi, x => shift[al.indexOf(x)]).replace(/[a-z]/g, x => rev[al.indexOf(x)]);
// }

export function rot13(str) {
const rot = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM0123456789';
 const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const decrypt = (x) => rot[alpha.indexOf(x)];
  return str.replace(/[a-zA-Z0-9]/g, decrypt);
}