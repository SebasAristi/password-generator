// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to randomize the contents of an array using a Fisher-Yates shuffle.
function shuffle(array) {
  var m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// Function to create random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var lowerCase = [
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
  "z",
];
var upperCase = [
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
  "Z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "]",
];

function generatePassword() {
  var allChosenCharacters = [];
  var finalPassword = [];
  var validatorCounter = 0;

  characterLength = prompt(
    "How many characters long would you like your password to be? \nMinimum: 8 Digits \nMaximum: 128 Digits"
  );

  if (characterLength > 7 && characterLength < 129) {
  } else {
    return "Please choose password length between 8 and 128 digits! \nPress the button to try again!";
  }

  // When one of the character types is chosen, a random character from that set is 'forced' into the final password at that moment.
  // This is to ensure that the final password is guaranteed to have at least one iteration of a chosen character type.
  // variable 'validatorCounter' is used to keep track of how many are 'forced' like this to ensure proper final password length.

  confirmLowerCase = confirm(
    "Would you like to have lowercase letters as part of your password?"
  );
  if (confirmLowerCase) {
    allChosenCharacters = allChosenCharacters.concat(lowerCase);
    var rand = getRandomInt(lowerCase.length);
    finalPassword.push(lowerCase[rand]);
    validatorCounter++;
  }

  confirmUpperCase = confirm(
    "Would you like to have UPPERCASE letters as part of your password?"
  );
  if (confirmUpperCase) {
    allChosenCharacters = allChosenCharacters.concat(upperCase);
    var rand = getRandomInt(upperCase.length);
    finalPassword.push(upperCase[rand]);
    validatorCounter++;
  }

  confirmNumbers = confirm(
    "Would you like to have numbers as part of your password?"
  );
  if (confirmNumbers) {
    allChosenCharacters = allChosenCharacters.concat(numbers);
    var rand = getRandomInt(numbers.length);
    finalPassword.push(numbers[rand]);
    validatorCounter++;
  }

  confirmSpecialCharacters = confirm(
    "Would you like to have special characters as part of your password? \nExamples: !'*+,-./:;<=>?@^_`{|}~"
  );
  if (confirmSpecialCharacters) {
    allChosenCharacters = allChosenCharacters.concat(specialCharacters);
    var rand = getRandomInt(specialCharacters.length);
    finalPassword.push(specialCharacters[rand]);
    validatorCounter++;
  }

  // Conditional if user fails to choose any of the options.
  if (
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmNumbers === false &&
    confirmSpecialCharacters === false
  ) {
    return "Please be sure to choose at least one option! \nPress the button to try again!";
  }

  // Final Password generation
  for (i = 0 + validatorCounter; i < characterLength; i++) {
    var rand = getRandomInt(allChosenCharacters.length);
    finalPassword.push(allChosenCharacters[rand]);
  }

  // The final password is not yet truly random at this point because the first 1-4 digits were 'forced' from their appropriate character types.
  // Using the 'shuffle' function below regains true randomness for the password.
  shuffle(finalPassword);
  return finalPassword.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);