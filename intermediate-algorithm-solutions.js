// Sum All Numbers in a Range

function sumAll(arr) {
  const start = Math.min(...arr);
  const end = Math.max(...arr);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

//Diff Two Arrays

function diffArray(arr1, arr2) {
  const newArr = [];
  newArr.push(arr1.filter((e) => !arr2.includes(e)));
  newArr.push(arr2.filter((e) => !arr1.includes(e)));
  return newArr.flat();
}

//Seek and Destroy

function destroyer(arr, ...args) {
  return arr.filter((e) => !args.includes(e));
}

//Search and Replace

function myReplace(str, before, after) {
  const arr = str.split(" ");
  const index = arr.indexOf(before);
  const regex = /[A-Z]/;
  if (!regex.test(arr[index][0])) {
    var newStr = after.toLowerCase();
  } else if (!regex.test(after[0])) {
    var newStr = after[0].toUpperCase().concat(after.substring(1));
  } else {
    var newStr = after;
  }
  return [...arr.slice(0, index), newStr, ...arr.slice(index + 1)].join(" ");
}

//DNA Pairing

function pairElement(str) {
  let arr = str.split("").map((base) => {
    switch (base) {
      case "A":
        return base.concat("T").split("");
      case "T":
        return base.concat("A").split("");
      case "C":
        return base.concat("G").split("");
      case "G":
        return base.concat("C").split("");
    }
  });
  return arr;
}

//Missing letters

function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (alphabet.includes(str)) {
    return undefined;
  }
  const start = alphabet.indexOf(str[0]);
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[start + i]) {
      var missingIndex = start + i;
      break;
    }
  }
  return alphabet[missingIndex];
}

//Sorted Union

function uniteUnique(...arr) {
  let flatArr = arr.flat();
  return flatArr.filter((num, index, array) => {
    return ![...array.slice(0, index)].includes(num);
  });
}

//Convert HTML Entities

function convertHTML(str) {
  return str
    .split("")
    .map((char) => {
      switch (char) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case "&":
          return "&amp;";
        case '"':
          return "&quot;";
        case "'":
          return "&apos;";
        default:
          return char;
      }
    })
    .join("");
}

//Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  let sum = 1,
    fibonacci = 1,
    count = 0;
  let arr = [1];
  while (fibonacci <= num) {
    arr.push(fibonacci);
    if (fibonacci % 2 !== 0) {
      sum += fibonacci;
    }
    fibonacci = arr[count] + arr[count + 1];
    count++;
  }
  return sum;
}

//Sum All Primes

function sumPrimes(num) {
  let sum = 0,
    count = 2;

  function numIsPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  while (count <= num) {
    if (numIsPrime(count)) {
      sum += count;
    }
    count++;
  }
  return sum;
}

//Smallest Common Multiple

function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const upperLimit = (() => {
    let multiple = 1;
    for (let i = min; i <= max; i++) {
      multiple *= i;
    }
    return multiple;
  })();

  function isMultiple(num, min, max) {
    for (let i = min; i <= max; i++) {
      if (num % i !== 0) {
        return false;
      }
    }
    return true;
  }

  for (let count = max; count < upperLimit; count++) {
    if (isMultiple(count, min, max)) {
      return count;
    }
  }
  return;
}

//Drop it

function dropElements(arr, func) {
  let newArr = [...arr];
  while (newArr.length > 0) {
    if (!func(newArr[0])) {
      newArr.shift();
      continue;
    }
    break;
  }
  return newArr;
}

//Steamroller

function steamrollArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr.push(...steamrollArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//Binary Agents

function binaryAgent(str) {
  return str
    .split(" ")
    .map((char) => {
      return String.fromCharCode(parseInt(char, 2));
    })
    .join("");
}

//Everything Be True

function truthCheck(collection, pre) {
  let newArr = collection.map((e) => (e[pre] ? true : false));
  if (newArr.includes(false)) {
    return false;
  }
  return true;
}

//Arguments Optional

function addTogether(...args) {
  if (typeof args[0] !== "number") {
    return undefined;
  }
  if (args.length === 1) {
    return (n) => addTogether(n, args[0]);
  }
  if (typeof args[1] !== "number") {
    return undefined;
  }
  return args[0] + args[1];
}

//Make a Person

const Person = function (firstAndLast) {
  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };
  this.getFullName = function () {
    return firstAndLast;
  };
  this.setFirstName = function (name) {
    firstAndLast = name + " " + firstAndLast.split(" ")[1];
  };
  this.setLastName = function (name) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + name;
  };
  this.setFullName = function (name) {
    firstAndLast = name;
  };
  return firstAndLast;
};

//Map the Debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  arr.forEach((e) => {
    e.orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + e.avgAlt, 3) / GM)
    );
    delete e.avgAlt;
  });

  return arr;
}
