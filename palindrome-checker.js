/*
Return true if the given string is a palindrome. Otherwise, return false.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
  const regex = /[a-z0-9]/;
  let charArr = [];
  for (const char of str.toLowerCase()) {
    if (regex.test(char)) {
      charArr.push(char);
    }
  }
  const formattedStr = charArr.join("");
  const reversedStr = charArr.reverse().join("");
  return formattedStr == reversedStr;
}

console.log("true", palindrome("eye"));
console.log("true", palindrome("A man, a plan, a canal. Panama"));
console.log("false", palindrome("1 eye for of 1 eye."));
