/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decodedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      let charIndex = alphabet.indexOf(str[i]);
      if (charIndex < 13) {
        decodedStr += alphabet[charIndex + 13];
      } else {
        decodedStr += alphabet[charIndex - 13];
      }
    } else {
      decodedStr += str[i];
    }
  }
  return decodedStr;
}

console.log("FREE CODE CAMP", rot13("SERR PBQR PNZC"));
console.log(
  "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.",
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
);
