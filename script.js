// Ask the user to choose R, P, or S
var input = window.prompt("R, P, or S")
console.log(input);
// Computer chooses R, P, or S
var choices = ["Rock", "Paper", "Scissors"];
var computerChoice = Math.floor(Math.random() *3);
// Displays what the computer chose
window.alert("The computer chose  "   + choices[computerChoice]);
// Tells the user if they won or lost 
// Ask if they want to play again, confirm
if (computerChoice === [0,2]) {
    window.prompt("You have lost")
    }
else {
    windows.prompt("You're the winner")
}
                          
