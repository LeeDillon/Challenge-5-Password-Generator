// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let bigArray = [lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters];

// Function to prompt user for password options
function getPasswordOptions() {

  const passwordOptions = {
    passwordLength: "",
    lowercaseChoice: false,
    uppercaseChoice: false,
    numericCharactersChoice: false,
    specialCharactersChoice: false
  };

  let passwordLengthInput = prompt("Please specify password length between 10 to 64 characters");
  passwordOptions.passwordLength = parseInt(passwordLengthInput)
  if (passwordOptions.passwordLength < 10 || passwordOptions.passwordLength > 64) {
    alert("Error, invalid selection made. Please try again with a number between 10 and 64");
  }
  else {
    passwordOptions.lowercaseChoice = confirm("Would you like the password to include lowercase characters? Click OK for yes or Cancel for no");
    passwordOptions.uppercaseChoice = confirm("Would you like the password to include uppercase characters? Click OK for yes or Cancel for no");
    passwordOptions.numericCharactersChoice = confirm("Would you like the password to include numeric characters? Click OK for yes or Cancel for no");
    passwordOptions.specialCharactersChoice = confirm("Would you like the password to include special characters E.g. $@%&*? Click OK for yes or Cancel for no");

  }
  console.log(passwordOptions);
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  



}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

