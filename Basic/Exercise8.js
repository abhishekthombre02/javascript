// Write a JavaScript program where the program takes a random integer between 1 and 10, 
// and the user is then prompted to input a guess number. The program displays a message 
// "Good Work" if the input matches the guess number otherwise "Not matched".

const number=Math.ceil(Math.random()*10);
console.log(number)
var guess;
// while(guess!=number){
//     guess=prompt("Enter your guess between 1 to 10");
// }
console.log(guess==number?"yes":"no");