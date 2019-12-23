// Assignment Code - Button is generate ID class.

var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
// User Input definition function
function getOptions() {

  var length = parseInt(prompt("How long would you like your password phrase? "));
  var symbols = confirm("Do you want symbols?");
  var lowerCase = confirm("Do you want lower case?");
  var upperCase = confirm("Do you want upper case?");
  var numbers = confirm("Do you want numbers?");

  //object
  var userDefine = {

    length: length,
    symbols: symbols,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numbers: numbers

  }
  return userDefine;

}



// randomizer function

function randomize(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  // Taking my randomized index value as an array value to grab specfic character/variable.
  var randomEl = arr[randomIndex];
  return randomEl;
}
// function to generate random password

function generatePassword() {
  var generateOptions = getOptions();
  var finalPassword = [];
  var guaranteeChar = [];
  var possibleChar = [];

  // if statement to push guaranteed characters into guaranteeChar array
  if (generateOptions.symbols === true) {
    possibleChar = possibleChar.concat(specialCharacters);
    guaranteeChar.push(randomize(specialCharacters));
  }

  // if statement to push guaranteed characters into guaranteeChar array
  if (generateOptions.numbers) {
    possibleChar = possibleChar.concat(numericCharacters);
    guaranteeChar.push(randomize(numericCharacters));
  }

  //if statement lowercase char's to guaranteeChar array
  if (generateOptions.lowerCase) {
    possibleChar = possibleChar.concat(lowerCasedCharacters);
    guaranteeChar.push(randomize(lowerCasedCharacters));
  }

  //if statement uppercase char's to guaranteeChar array
  if (generateOptions.upperCase) {
    possibleChar = possibleChar.concat(upperCasedCharacters);
    guaranteeChar.push(randomize(upperCasedCharacters));
  }

  for (var i = 0; i < generateOptions.length; i++) {

    var possibleEl = randomize(possibleChar);
    finalPassword.push(possibleEl)
    console.log(possibleEl)
  }
  for (var i = 0; i < guaranteeChar.length; i++) {
    finalPassword[i] = guaranteeChar[i];
  }
  return finalPassword.join("");

}

result = generatePassword()
alert(result)


// Generator functions

/*function getRandomLower() {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }

 function getRandomNumber() {
   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }

 function getRandomSymbol() {
  const symbols = " !#$%&()*+,-./:;<=>?@[\]^_`{|}~'";
  return symbols[Math.floor(Math.random() * symbols.length)];
 }*/


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  /* 
  DYNAMICALLY PUT GENERATED PASSWORD INTO .HTML BY CREATING PASSWORD VARIABLE THAT TAKES IN GENERATED PASSWORD OUTPUT. 
  STORES. THEN CREATES VARIABLE SELECT .HTML "ID" WHERE PASSWORD WILL DYNAMICALLY SHOW UP (TEXT AREA).
  */

  passwordText.value = password;
  //OR passwordText.textContent = password;    ^^^^^^(202)

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
