// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCaseLetters = ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"]
var specialCharacters = ["!", "\"", "#", "$", "%", "&", "\'", ")", "(", "*", ",", ".", "-","/", ":", ";", "<", ">", "=", "?", "[", "]", "~", "_", "{", "}", "^"]