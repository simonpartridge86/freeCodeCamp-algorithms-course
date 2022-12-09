/*
Convert the given number into a roman numeral.
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  const romanArr = [];
  while (num > 0) {
    switch (true) {
      case num >= 1000:
        romanArr.push("M");
        num -= 1000;
        break;
      case num >= 900:
        romanArr.push("CM");
        num -= 900;
        break;
      case num >= 500:
        romanArr.push("D");
        num -= 500;
        break;
      case num >= 400:
        romanArr.push("CD");
        num -= 400;
        break;
      case num >= 100:
        romanArr.push("C");
        num -= 100;
        break;
      case num >= 90:
        romanArr.push("XC");
        num -= 90;
        break;
      case num >= 50:
        romanArr.push("L");
        num -= 50;
        break;
      case num >= 40:
        romanArr.push("XL");
        num -= 40;
        break;
      case num >= 10:
        romanArr.push("X");
        num -= 10;
        break;
      case num >= 9:
        romanArr.push("IX");
        num -= 9;
        break;
      case num >= 5:
        romanArr.push("V");
        num -= 5;
        break;
      case num >= 4:
        romanArr.push("IV");
        num -= 4;
        break;
      case num >= 1:
        romanArr.push("I");
        num -= 1;
        break;
    }
  }
  return romanArr.join("");
}

console.log("XXXVI", convertToRoman(36));
console.log("DCXLIX", convertToRoman(649));
console.log("MXXIII", convertToRoman(1023));
