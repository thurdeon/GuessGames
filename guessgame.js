const username = prompt("What should I call you?")

console.log("Welcome to Guess Game " + username)
console.log("In this game you will be asked to guess a number between 1 and 2. If you get it correct, you will win a point and progress to level 2. If you get it wrong three times, you will lose the game.")

let userPoints = 0;
let userGameLoss = 0;
let correctNum = Math.floor(Math.random()*(2-1+1))+1

let userGuess = prompt("Guess a nummber between 1 and 2")
for (let i=0; i<3; i++) {
  if (userGuess < correctNum) {
    userGuess = prompt("Try a higher number") 
    userGameLoss++;
}
 else if (userGuess > correctNum) {
    userGuess = prompt("Try a lower number") 
}
  else if (userGuess = correctNum) {
    userGuess = prompt("Correct. Press Enter to move to Level 2")
    userPoints++;
    break;
}
  
}

if (userPoints == 0) {
  console.log("Sorry you lost. Try Again")
}

if (userPoints == 1) {
  correctNum = Math.floor(Math.random()*(3-1+1))+1
  userGuess = prompt("Enter a number between 1 and 3") 
   for (let i=0; i<3; i++) {
  if (userGuess < correctNum) {
    userGuess = prompt("Try a higher number") 
    userGameLoss++;
}
 else if (userGuess > correctNum) {
    userGuess = prompt("Try a lower number") 
}
  else if (userGuess = correctNum) {
    userGuess = prompt("Correct. Press Enter to move to Level 3")
    userPoints++;
    break;
}
 }
}
