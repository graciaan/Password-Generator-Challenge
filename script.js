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


function generatePassword(){
  howManyDigits = prompt("Hello, how many digits would you like the password to be? It must be between 8-128 digits")
    if (howManyDigits < 8){
    return "Please pick more than 8 digits"
  } else if (howManyDigits > 128){
    return "Please pick less than 128 digits"
  } else {
    alert("You will have "+howManyDigits+" digits in your password")
  } 
  
  numberPrompt = prompt("Would you like to include numbers in your password? Please choose \"yes\" or \"no\"")
  if(numberPrompt == "yes"){
    alert("Your password will contain Numbers")
  } else if (numberPrompt == "no"){
    alert("Your password will not contain Numbers")
  } else {
    alert("Please enter 'yes' or 'no' as your response")
  }

  capitalPrompt = prompt("Would you like to include Capital Letters? Please choose \"yes\" or \"no\"")
  if(capitalPrompt == "yes"){
    alert("Your password will contain Capital Letters")
  } else if (capitalPrompt == "no"){
    alert("Your password will not contain Capital Letters")
  } else {
    alert("Please enter 'yes' or 'no' as your response")
  }
  
  lowerCasePrompt = prompt("Would you like to include Lower Case Letters? Please choose \"yes\" or \"no\"")
  if(lowerCasePrompt == "yes"){
    alert("Your password will contain Lower Case Letters")
  } else if (lowerCasePrompt == "no"){
    alert("Your password will not contain Lower Case Letters")
  } else {
    alert("Please enter 'yes' or 'no' as your response")
  }
  
  specialPrompt = prompt("Would you like to include Special Characters? Please choose \"yes\" or \"no\"")
  if(specialPrompt == "yes"){
    alert("Your password will contain Special Characters")
  } else if (specialPrompt == "no"){
    alert("Your password will not contain Special Characters")
  } else {
    alert("Please enter 'yes' or 'no' as your response")
  }
}