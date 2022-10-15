var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// This is the event listener that waits for the mouse click on the button to run the code
generateBtn.addEventListener("click", writePassword);

//these are all of the arrays used to choose from
//the last array is left empty to create a new array based on user input
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseLetters = ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"];
var specialCharacters = ["!", "\"", "#", "$", "%", "&", "\'", ")", "(", "*", ",", ".", "-","/", ":", ";", "<", ">", "=", "?", "[", "]", "~", "_", "{", "}", "^"];
var passCombo = [];

//this part of the function is what allows the user to input their choices in to the prompt boxes
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

  //this is the code that combines together the arrays that will be used for password selection. 
  if (numberPrompt == "yes"){
    passCombo = passCombo.concat(numbers);
  } 
  if (capitalPrompt == "yes"){
    passCombo = passCombo.concat(capitalLetters);
  } 
  if (lowerCasePrompt == "yes"){
    passCombo = passCombo.concat(lowerCaseLetters);
  } 
  if (specialPrompt == "yes"){
    passCombo = passCombo.concat(specialCharacters);
  } 

//this for loop picks through the newly combined array to randomly create the password
  let password = ""
  for(let i=0; i < howManyDigits; i++){
    let random = [Math.floor(Math.random()*passCombo.length)];
    password = password + passCombo[random];
    console.log(random)
  }
  //this is the final randomized password
  return password;
  
}