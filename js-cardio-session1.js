// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // PATH 1
  // const strArr = str.split("");
  // strArr.reverse();
  // return strArr.join("");
  // Clean up
  // return str.split("").reverse().join("");
  // PATH 2 - old school for loops
  // let revString = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;
  // PATH 3 - old school for loops
  // let revString = "";
  // for (let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;
  // PATH 4 - es6 - for of
  // let revString = "";
  // for (let character of str) {
  //   revString = character + revString;
  // }
  // return revString;
  //  PATH 5 - high order function methon - forEach
  // let revString = "";
  // str.split("").forEach((element) => (revString = element + revString));
  // return revString;
  // PATH 6 - reduce() - more difficult high order array method
  return str
    .split("")
    .reduce((revString, character) => character + revString, "");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
// racecar, madam

function isPalindrome(str) {
  const revString = str.split("").reverse().join("");
  return revString === str;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int.toString().split("").reverse().join("");
  return parseInt(revString) * Math.sign(int);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  // PATH 1 - old school for loop
  // const strArr = str.toLowerCase().split(" ");
  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] =
  //     strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  // return strArr.join(" ");
  // PATH 2 - map - high order method - es6
  // return str
  //   .toLowerCase()
  //   .split(" ")
  //   .map((word) => word[0].toUpperCase() + word.substr(1))
  //   .join(" ");
  // PATH 3 - regular expression - not good
  return str
    .toLowerCase()
    .replace(/\b[a-z]/gi, (character) => character.toUpperCase());
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const characterMap = {};
  let maxNum = 0;
  let maxChar = "";
  str.split("").forEach((character) => {
    if (characterMap[character]) {
      characterMap[character]++;
    } else {
      characterMap[character] = 1;
    }
  });
  // FOR IN loop - object method
  for (let character in characterMap) {
    // debugger; // don't uncomment
    if (characterMap[character] > maxNum) {
      maxNum = characterMap[character];
      maxChar = character;
    }
  }
  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % (3 * 5) === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

// Call Function
const output = fizzBuzz();

console.log(output);
