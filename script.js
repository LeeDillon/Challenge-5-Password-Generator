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

// Function to prompt user for password options
function getPasswordOptions() {

  // Creating an object with default values to store user input
  const passwordOptions = {
    passwordLength: "",
    lowercaseChoice: false,
    uppercaseChoice: false,
    numericCharactersChoice: false,
    specialCharactersChoice: false
  };
  // Ask user for password parameters and store them in object
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
  return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)][Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  let userPasswordOptions = getPasswordOptions();
  // Check that user has selected at least one character type
  if (userPasswordOptions.lowercaseChoice === false && userPasswordOptions.uppercaseChoice === false && userPasswordOptions.numericCharactersChoice === false && userPasswordOptions.specialCharactersChoice === false) {
    alert("ERROR, at least one character type must be selected. Please try again!")
  } else {
    // Create a new array containing existing character arrays based on users choices
    let userPasswordOptionsArray = [];
    if (userPasswordOptions.lowercaseChoice === true) {
      userPasswordOptionsArray.push(lowerCasedCharacters);
    }
    if (userPasswordOptions.uppercaseChoice === true) {
      userPasswordOptionsArray.push(upperCasedCharacters);
    }
    if (userPasswordOptions.numericCharactersChoice === true) {
      userPasswordOptionsArray.push(numericCharacters);
    }
    if (userPasswordOptions.specialCharactersChoice === true) {
      userPasswordOptionsArray.push(specialCharacters);
    }
    // Create a new array to store the randomised values taken from selected character arrays
    let passwordOutputArray = [];
    for (i = 0; i < userPasswordOptions.passwordLength; i++) {
      passwordOutputArray[i] = getRandom(userPasswordOptionsArray);
    }
    // Convert outputted random array into a string and remove commas. Then store this in a new variable that is returned by the method
    let passwordOutput = passwordOutputArray.join("");
    return passwordOutput;
  }
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

