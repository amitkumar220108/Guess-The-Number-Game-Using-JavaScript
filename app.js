//Guessing The Number
const max = Number(prompt("Enter The Maximum Number: "));
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess The Number: ");

while (true) {
    if (guess === "quit") {
        console.log("You Quit The Game");
        break;
    }

    guess = Number(guess);

    if (guess === random) {
        console.log("You Guessed It Right");
        console.log("Random Number is:", random);
        break;
    } else if (guess < random) {
        guess = prompt("Hint: You Guessed a Smaller Number\nPlease Try Again: ");
    } else if (guess > random) {
        guess = prompt("You Guessed a Larger Number\nPlease Try Again: ");
    } else {
        guess = prompt("Invalid Guess, Please Try Again: ");
    }
}
